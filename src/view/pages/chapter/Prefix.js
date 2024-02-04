import React from "react";

export default function Prefix({ prefix, color }) {
  if (!prefix) {
    return null;
  }
  return (
    <div>
      {prefix.split("/").map((e) => {
        return <span>{e}</span>;
      })}
    </div>
  );
}
