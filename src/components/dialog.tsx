"use client";

import { useRef } from "react";

export default function CustomDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button className="button button-outline" type="button" onClick={() => dialogRef.current?.showModal()}>
        Open Dialog
      </button>
      <dialog ref={dialogRef} className="dialog">
        <div className="dialog-content">
          <button className="dialog-close" type="button" aria-label="Close" onClick={() => dialogRef.current?.close()}>
            ×
          </button>
          <h2>Dialog Title</h2>
          <p>Lorem ipsum dolor sit.</p>
          <div className="dialog-actions">
            <button className="button button-outline" type="button" onClick={() => dialogRef.current?.close()}>
              Cancel
            </button>
            <button className="button button-primary" type="button" onClick={() => dialogRef.current?.close()}>
              Save
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
