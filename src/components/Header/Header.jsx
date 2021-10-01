import { useEffect, useState } from "react/cjs/react.development";
import Timer from "../Timer/Timer";
import classes from './Header.module.css'

export default function Header ({restart, finish}) {

    const [refresh, setRefresh] = useState(false);
    
    const handleClick = () => {
        restart();
        setRefresh(true);
    }

    useEffect(() => setRefresh(false), [finish])

  
  return (
      <header className={classes.header}>
          <div className="logo">
              <span className={classes.logo__name}>Memory</span>
          </div>
          <Timer key={new Date().getDate()} 
          finish={finish} 
          refresh={refresh} />
          <button className={classes.btn} onClick={handleClick}>Restart</button>
      </header>
  );
}
