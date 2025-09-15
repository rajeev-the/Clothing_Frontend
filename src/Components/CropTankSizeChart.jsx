// src/Components/CropTankSizeChart.jsx
import React from "react";

export default function CropTankSizeChart({
  title = "Size Chart",
  product = "Sizes",
  sizes = ["XS", "S", "M", "L", "XL", "2XL"],
  rows = [
    { label: "Length (Inch)", values: [16.5, 17, 17.5, 18, 18.5, 19] },
    { label: "Waist (Inch)",  values: [28, 30, 32, 34, 36, 38] },
    { label: "Bust (Inch)",   values: [32, 34, 36, 38, 40, 42] },
  ],
  note = "All measurements are in inches",
  className = "",
}) {
  return (
<section className={`w-full mt-3 p-2 ${className}`}>
  {/* Card wrapper */}
  <div className="rounded-2xl bg-white border mt-5 border-[#1B2559] p-2 shadow-md">
    <div className="flex items-center gap-2 mb-3">
      <h2 className="text-lg font-semibold text-[#1B2559]">{title}</h2>
      {note && <span className="text-[#1B2559]" title={note}>ⓘ</span>}
    </div>

    <div className="overflow-x-auto rounded-xl border border-[#1B2559]">
      <table className="min-w-[720px] w-full text-sm">
        <thead className="bg-[#1B2559]">
          <tr>
            <th className="text-left px-4 py-3 font-medium text-white">
              {product}
            </th>
            {sizes.map((s) => (
              <th
                key={s}
                className="px-4 py-3 font-medium text-white text-center"
              >
                {s}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-white" : "bg-[#E5C870]/20"}
            >
              <td className="px-4 py-3 font-medium text-[#1B2559]">
                {row.label}
              </td>
              {row.values.map((v, idx) => (
                <td key={idx} className="px-4 py-3 text-center text-[#1B2559]">
                  {v}
                </td>
              ))}
            </tr>
          ))}

          {rows.length === 0 && (
            <tr>
              <td
                colSpan={sizes.length + 1}
                className="px-4 py-3 text-[#1B2559]/70 text-center"
              >
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</section>

  );
}
