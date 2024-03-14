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
            <div key={key} style={{ marginBottom: "12px" }}>
              <Link href={value}>
                <span
                  className="level2"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  {`> ${key}`}
                </span>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default function SNG() {
  return (
    <div id="SNG">
      {Object.entries(SNG_MENU).map(([key, value]) => {
        return (
          <div key={key}>
            <div className="level1">{key}</div>
            {getEveryMenu(value)}
          </div>
        );
      })}
    </div>
  );
}
