import Link from "next/link";
import ReactQueryProvider from "@/providers/react-query";
import Mainnn from "@/components/Registartor/registration";

export default function Rega() {
  return (
    <div>
      <ReactQueryProvider>
        <Mainnn/>
      </ReactQueryProvider>
    </div>
  );
}