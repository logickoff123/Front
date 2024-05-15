import Link from "next/link";
import Banner from "../components/Banner/Banner";
import ProductCard from "@/components/ProductCard";
import Category from "@/components/Category";
import Catalog from "@/components/Catalog";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Category/>
      <Catalog/>
    </div>
  );
}
