import React, { useState } from 'react';
import { sendOtpToEmail, verifyOtpAndLogin } from '../Service/UserAPI';
import { toast } from 'react-toastify';

const Signup = ({ setIsOpenLog, login }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [confpassword, setConfPassword] = useState('');
  const [confname, setConfName] = useState('');
  const [Telephone, setTelephone] = useState('');
 const [firstName, setFirstName] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false); // 👈 Track user existence
  const [reg,setReg]= useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email) return toast.error('Please enter your Gmail');

    setLoading(true);
    try {
      const res = await sendOtpToEmail({ email });
      toast.success(res.message || 'OTP sent');
      setIsExistingUser(res.userExists); // 👈 set if user already exists
      setStep(2);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp || !email) return toast.error('Enter both Email and OTP');

    setLoading(true);
    try {
      const res = await verifyOtpAndLogin({ email, otp, name });

      if (res.user) {
        login(res.user); // Save to context
        toast.success('Logged in successfully');
        setIsOpenLog(false);
      } else {
        toast.error(res.message || 'Verification failed');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error verifying OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      
     
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative">
       
        <h2 className="text-xl font-bold mb-4 text-center">
          {step === 1 ? 'Enter Gmail to Get OTP' : 'Verify OTP'}
        </h2>
        

        <form onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your Gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
           <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          
           
            {
        reg &&(
          <>
           <input
            type="text"
            placeholder="Enter your confirm  password"
            value={confpassword}
            onChange={(e) => setConfPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
            <input
            type="text"
            placeholder="Enter your firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          
            <input
            type="text"
            placeholder="Enter your lastName"
            value={confname}
            onChange={(e) =>  setConfName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          
            <input
            type="text"
            placeholder="Enter your telephone"
            value={Telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          
         
           
           <button
            
          onClick={() =>{
              setReg(reg=>!reg)
          
              toast.success("Registration successfully")
          } 

          }
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
          >
          Confirm
          </button>
          
          
          </>
          
      
       
        

    
        )

        
      }

          {step === 2 && (
            <>
              {!isExistingUser && ( // 👈 Only show if user doesn't exist
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              )}
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
              
                 <button
            
          onClick={() => setReg(reg=>!reg)}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
          >
          Registration
          </button>
            </>
          )}
          {
            !reg &&(
              <>
                <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? 'Processing...' : step === 1 ? 'Send OTP' : 'Verify & Login'}
          </button>
              
              </>
            )
          }

        
            <button
            
          onClick={() => setReg(reg=>!reg)}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
          >
          Registration
          </button>
        </form>

        {step === 2 && (
          <p className="mt-3 text-sm text-center">
            Didn't get OTP?{' '}
            <button onClick={() => setStep(1)} className="text-blue-600 underline">
              Resend
            </button>
          </p>
        )}

        <button
          onClick={() => setIsOpenLog(false)}
          className="absolute top-4 right-4 text-black text-2xl hover:text-red-600"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Signup;

