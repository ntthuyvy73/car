import { Catalogue, Hero } from "@/components";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Hero />
            <Catalogue />
        </main>
    );
}
