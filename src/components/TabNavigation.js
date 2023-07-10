function TabNavigation() {
  const menu = ["ALL", "NORMAL", "FIGHTING", "FLYING"];

  return (
    <div className="w-28 h-full bg-slate-200 absolute left-0 top-0 bottom-0 flex justify-center pt-2">
      <ul className="bg-red-100">
        <li className="text-center text-xl py-2">MENU</li>
        {menu.map((element, index) => {
          return (
            <li className=" border-slate-800 border-transparent border-t-2 pl-2 text-lg py-2 cursor-pointer last:border-b-2 hover:bg-slate-200">
              <a href="#">{element}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TabNavigation;
