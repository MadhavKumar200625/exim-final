"use client";

import React, { useEffect, useState } from "react";
import Products from "./Products";

export default function ProductsClient({ params }) {
  const { products, country, type, page } = params;

  const [data, setData] = useState({
    defaultLetter: products.replace(/^product-/, "").toUpperCase(),
    types: ["Import", "Export"],
    countries: [
      "Bangladesh",
      "Brazil",
      "Indonesia",
      "Mexico",
      "Pakistan",
      "Phillippines",
      "Russia",
      "Sri Lanka",
      "Tanzania",
      "Vietnam",
    ],
    totalValues: 0,
    products: [],
  });

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setErr(null);

      try {
        const countryKey = country
          .replace(/^country-/, "")
          .replace(/-/g, "_")
          .toLowerCase();

        const typeKey = type.replace(/^type-/, "").toLowerCase();
        const columnName = `${countryKey}_${typeKey}_on`;

        const pageNumber = parseInt(page.replace("pg-", ""), 10);

        const payload = {
          source: "countries_product",
          type: "list",
          size: (pageNumber - 1) * 100 + 1,
          filters: products.replace(/^product-/, "").toUpperCase(),
          columns: columnName,
        };

        const res = await fetch("https://test.eximtradedata.com/global-products/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`API failed (${res.status})`);

        const json = await res.json();

        if (!json || !json.success || !json.data) {
  setData(d => ({ ...d, products: [], totalValues: 0 }));
  return;
}

        setData({
          defaultLetter: products.replace(/^product-/, "").toUpperCase(),
          countries: [
            "Bangladesh",
            "Brazil",
            "Indonesia",
            "Mexico",
            "Pakistan",
            "Phillippines",
            "Russia",
            "Sri Lanka",
            "Tanzania",
            "Vietnam",
          ],
          types: ["Import", "Export"],
          totalValues: json.data.total_values ?? 0,
          products: json.data.data ?? [],
        });
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [products, country, type, page]);

  if (loading)
    return <p className="p-10 text-center text-lg">Loading products…</p>;

  if (err)
    return <p className="p-10 text-center text-red-600">Failed: {err}</p>;

  return <Products {...data} />;
}