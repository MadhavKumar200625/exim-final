"use client";

import { useEffect } from "react";
import {
  getCachedCountryPhone,
  fetchAndCacheCountryPhone,
} from "@/lib/geoPhone";

/**
 * Bootstraps geo + phone code into localStorage.
 * - Runs once per tab
 * - No UI
 * - Safe for Cloudflare cached pages
 */
export default function GeoBootstrap() {
  useEffect(() => {
    const init = async () => {
      // already cached & valid
      if (getCachedCountryPhone()) return;

      // fetch + cache
      await fetchAndCacheCountryPhone();
    };

    init();
  }, []);

  return null;
}