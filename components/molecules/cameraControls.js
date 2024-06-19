import Image from "next/image";
import React from "react";

const CameraControls = ({ toggle, isMobile, handleToggle, handleUpNDown }) => {
  return (
    <div className="mx-1 flex items-center justify-between">
      <div className="text-xs">{isMobile ? "Visa Officer" : "Student"}</div>
      <div className="flex items-center gap-4">
        {isMobile ? (
          <div>
            <Image src="/talking-3.svg" width={12} height={12} />
          </div>
        ) : (
          <div className="cursor-pointer" onClick={handleToggle}>
            {toggle ? (
              <Image src="/videocam.svg" width={18} height={18} />
            ) : (
              <Image src="/videocam-off.svg" width={18} height={18} />
            )}
          </div>
        )}

        <div className="cursor-pointer sd:hidden" onClick={handleUpNDown}>
          {toggle ? (
            <Image src="/up-arrow.svg" width={18} height={18} />
          ) : (
            <Image src="/down-arrow.svg" width={18} height={18} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CameraControls;
