import React from "react";

function Rating({rating}) {
  return (
    <p className="inline px-2 bg-[#51C452] text-white text-xs font-semibold rounded-sm">
      {rating} &#9733;
    </p>
  );
}

export default Rating;
