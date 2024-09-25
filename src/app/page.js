import Main from "@/Components/Main";

import { DataProvider } from "@/context/DataContext";

export default function Home() {
  return (
    <main className="">
      <DataProvider>
      <Main />
     </DataProvider>
    </main>
  );
}