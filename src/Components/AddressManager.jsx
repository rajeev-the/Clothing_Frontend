// 📁 src/components/AddressManager.jsx
import React, { useState, useEffect } from 'react';
import { addAddressToUser } from '../Service/UserAPI';
import { toast } from 'react-toastify';

const AddressManager = ({ addresss, setAddresss, user, setUser }) => {
  const [address, setAddress] = useState({
    fullName: '',
    mobileNumber: '',
    houseNumber: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    landmark: '',
    addressType: 'Home',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pinStatus, setPinStatus] = useState({ loading: false, msg: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Pincode: digits only, max 6
    if (name === 'pincode') {
      const onlyDigits = value.replace(/\D/g, '').slice(0, 6);
      setAddress((prev) => ({ ...prev, pincode: onlyDigits }));
      setPinStatus({ loading: false, msg: '' });
      return;
    }

    // Mobile number: digits only, max 10
    if (name === 'mobileNumber') {
      const onlyDigits = value.replace(/\D/g, '').slice(0, 10);
      setAddress((prev) => ({ ...prev, mobileNumber: onlyDigits }));
      return;
    }

    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  // Auto-fetch City/State when pincode is 6 digits (debounced)
  useEffect(() => {
    const pc = address.pincode;
    if (pc.length !== 6) return; // only when complete

    let cancelled = false;
    setPinStatus({ loading: true, msg: '' });

    const t = setTimeout(async () => {
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pc}`);
        const data = await res.json();

        const item = Array.isArray(data) ? data[0] : null;

        if (
          item &&
          item.Status === 'Success' &&
          Array.isArray(item.PostOffice) &&
          item.PostOffice.length > 0
        ) {
          const first = item.PostOffice[0];
          const detectedCity = first.District || '';
          const detectedState = first.State || '';

          if (!cancelled) {
            setAddress((prev) => ({
              ...prev,
              city: prev.city || detectedCity,
              state: prev.state || detectedState,
              country: 'India',
            }));
            setPinStatus({ loading: false, msg: '' });
          }
        } else {
          if (!cancelled) {
            setPinStatus({ loading: false, msg: 'Invalid pincode' });
          }
        }
      } catch (e) {
        if (!cancelled) {
          setPinStatus({ loading: false, msg: 'Could not fetch location. Try again.' });
        }
      }
    }, 500); // debounce 500ms

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [address.pincode]);

  const handleAddAddress = async () => {
    setError('');

    // Required fields check
    const requiredFields = [
      'fullName',
      'mobileNumber',
      'houseNumber',
      'street',
      'city',
      'state',
      'pincode',
      'country',
    ];
    for (let field of requiredFields) {
      if (!address[field]) {
        setError(`Please fill the ${field}`);
        return;
      }
    }

    // Pincode validation
    if (address.pincode.length !== 6) {
      setError('Please enter a valid 6-digit pincode');
      return;
    }

    // Mobile number validation (digits only, 10)
    const mobileDigits = String(address.mobileNumber || '').replace(/\D/g, '');
    if (mobileDigits.length !== 10) {
      toast.error('Mobile number should be 10 digits');
      return;
    }

    try {
      setLoading(true);
      const response = await addAddressToUser({
        userId: user._id,
        address: { ...address, mobileNumber: mobileDigits }, // normalize before send
      });

      setUser(response.user);
      localStorage.setItem('user', JSON.stringify(response.user));

      // Reset form
      setAddress({
        fullName: '',
        mobileNumber: '',
        houseNumber: '',
        street: '',
        city: '',
        state: '',
        pincode: '',
        country: 'India',
        landmark: '',
        addressType: 'Home',
      });

      toast.success('Address added successfully');
    } catch (err) {
      setError(err?.message || 'Failed to add address');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mt-6 border-t border-gray-700 pt-4">
      <h3 className="text-lg font-semibold mb-2 text-[#1B2559]">Saved Addresses</h3>

      {user?.address && user.address?.length > 0 ? (
        <ul className="space-y-2 text-sm">
          {user.address.map((addr, index) => {
            const isSelected = addresss === addr;
            return (
              <li
                onClick={() => setAddresss(addr)}
                key={index}
                className={`p-3 rounded-lg border-4 text-white cursor-pointer transition 
                  ${isSelected ? 'border-yellow-400 bg-gray-700' : 'border-gray-700 bg-[#1B2559] hover:bg-gray-700'}`}
              >
                <p className="font-semibold text-white">
                  {addr.fullName} ({addr.addressType})
                </p>
                <p>
                  {addr.houseNumber}, {addr.street}, {addr.city}, {addr.state} - {addr.pincode}
                </p>
                <p>
                  {addr.country}
                  {addr.landmark && `, Landmark: ${addr.landmark}`}
                </p>
                <p>📞 {addr.mobileNumber}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-400 text-sm">No saved addresses yet.</p>
      )}

      {/* Add Address Form */}
      <h3 className="text-lg font-semibold text-[#1B2559] mt-6 mb-2">Add New Address</h3>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <input
          name="fullName"
          placeholder="Full Name"
          value={address.fullName}
          onChange={handleInputChange}
          className="p-2 bg-gray-900 border border-gray-600 text-white rounded"
        />
        <input
          name="mobileNumber"
          placeholder="Mobile Number"
          value={address.mobileNumber}
          onChange={handleInputChange}
          className="p-2 bg-gray-900 border border-gray-600 text-white rounded"
        />
        <input
          name="houseNumber"
          placeholder="House No."
          value={address.houseNumber}
          onChange={handleInputChange}
          className="p-2 bg-gray-900 border border-gray-600 text-white rounded"
        />
        <input
          name="street"
          placeholder="Street"
          value={address.street}
          onChange={handleInputChange}
          className="p-2 bg-gray-900 border border-gray-600 text-white rounded"
        />

        {/* Pincode with status helper */}
        <div className="col-span-1">
          <input
            name="pincode"
            placeholder="Pincode"
            value={address.pincode}
            onChange={handleInputChange}
            className="p-2 bg-gray-900 border border-gray-600 text-white rounded w-full"
          />
          {pinStatus.loading && (
            <p className="text-xs text-gray-400 mt-1">Fetching city/state…</p>
          )}
          {!pinStatus.loading && pinStatus.msg && (
            <p className="text-xs text-red-400 mt-1">{pinStatus.msg}</p>
          )}
        </div>

        <input
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleInputChange}
          className="p-2 bg-gray-900 border border-gray-600 text-white rounded"
        />
        <input
          name="state"
          placeholder="State"
          value={address.state}
          onChange={handleInputChange}
          className="p-2 bg-gray-900 border border-gray-600 text-white rounded"
        />

        <input
          name="landmark"
          placeholder="Landmark (optional)"
          value={address.landmark}
          onChange={handleInputChange}
          className="p-2 bg-gray-900 border border-gray-600 text-white rounded"
        />
        <input
          name="country"
          placeholder="Country"
          value={address.country}
          onChange={handleInputChange}
          className="p-2 bg-gray-900 border border-gray-600 text-white rounded col-span-2"
        />

        <select
          name="addressType"
          value={address.addressType}
          onChange={handleInputChange}
          className="p-2 bg-gray-900 border border-gray-600 text-white rounded col-span-2"
        >
          <option>Home</option>
          <option>Office</option>
          <option>Other</option>
        </select>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <button
        onClick={handleAddAddress}
        disabled={loading}
        className="mt-4 w-full bg-[#E5C870] text-black py-2 rounded font-semibold hover:bg-yellow-400 disabled:opacity-60"
      >
        {loading ? 'Adding Address...' : 'Add Address'}
      </button>
    </div>
  );
};

export default AddressManager;
