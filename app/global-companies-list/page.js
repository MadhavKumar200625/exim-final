import { notFound } from "next/navigation";

export default function Page() {
  // The global companies directory is disabled. See the matching nginx rule.
  notFound();
}
