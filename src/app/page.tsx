import Link from "next/link";
import Banner from "../components/Banner/Banner";
import ProductCard from "@/components/ProductCard";
import Category from "@/components/Category";
import Catalog from "@/components/Catalog";
import Brend from "@/components/Brend";
import InfoCompany from "@/components/InfoCompany";

export default function Home() {
  return (
    <div>
      <Category/>
      <Catalog/>
      <Brend/>
    </div>
  );
}
