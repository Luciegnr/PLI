import React from "react";
import "../../App.css"
type Props = {
  title: string;
  subtitle: string;
  dark: boolean;
  id: any;
};
export default function Section({ title, subtitle, dark, id }: Props) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
