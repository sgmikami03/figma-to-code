import classes from "./page.module.css";
import resets from "@/components/clapy/_resets.module.css";
import { Design2Website } from "@/components/clapy/Design2Website/Design2Website";

const Page = () => {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Design2Website />
    </div>
  );
};

export default Page;
