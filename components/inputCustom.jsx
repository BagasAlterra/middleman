import React from "react";

export default function InputCustom(props) {
  return (
    <div>
      <input
        required="required"
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="input input-bordered input-primary text-black input-sm font-Roboto rounded-[20px] my-1 w-full md:h-10 md:w-72 lg:w-96 lg:input-md"
      />
    </div>
  );
}
