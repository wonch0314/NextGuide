import SNG_MENU from "@/public/data/SNG.json";
import Link from "next/link";

const getEveryMenu = (value) => {
  if (Object.keys(value).length == 0) {
    return null;
  }

  return (
    <div>
      {Object.entries(value).map(([key, value]) => {
        if (key !== "/") {
          return (
            <div key={key}>
              <Link href={value}>{key}</Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default function SNG() {
  return (
    <div>
      {Object.entries(SNG_MENU).map(([key, value]) => {
        return (
          <div key={key}>
            <div>{key}</div>
            {getEveryMenu(value)}
          </div>
        );
      })}
    </div>
  );
}
