import React from 'react';

const Scanlines = () => {
  return (
    <>
      {/* Scanline overlay */}
      <div
        className="scanline-effect fixed inset-0 pointer-events-none z-[9999]"
      />
      
      {/* CRT flicker effect overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998] bg-white/5 crt-effect"
      />
    </>
  );
};

export default Scanlines;