import "./homesearch.css";
import { SearchForm, searchForm } from "./SearchForm";
import { useState, useEffect } from "react";

export const HomeSearch = ({ status }) => {
  const { isBikeClicked, isCarClicked, isHealthClicked } = status;
  // setbottomUp(isBikeClicked || isCarClicked || isHealthClicked);
  let name = isBikeClicked ? "bike" : isCarClicked ? "car" : "car";
  const [bottomUp, setBottomUp] = useState(false);
  useEffect(() => {
    setBottomUp((prev) => !prev);
  }, [isBikeClicked, isCarClicked, isHealthClicked]);
  return (
    <div className={`ktCqFd bottomUp`}>
      <div className='LRcGK'>
        <div className='hJRWuT'>
          {<SearchForm name={name}></SearchForm>}
          <div className='etzQcK'>
            <div className='jnmVzO'></div>
            <p className='fGbcQI'>OR</p>
            <div className='jnmVzO'></div>
          </div>
          <div className='cXFueQ'>
            <div className='fRJFwS'>
              <img
                src='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjAuNzg3NiA0MGMxMS4wNDU3IDAgMjAtOC45NTQzIDIwLTIwcy04Ljk1NDMtMjAtMjAtMjAtMjAuMDAwMDAyIDguOTU0My0yMC4wMDAwMDIgMjAgOC45NTQzMDIgMjAgMjAuMDAwMDAyIDIweiIgZmlsbD0iIzcwM2JkOSIvPjxnIGZpbGw9IiMxNmMyZjgiPjxwYXRoIGQ9Im0yNy40ODEyIDIyLjcxMDRjLS42MDI1IDAtMS4xODAzLjIzOTQtMS42MDYzLjY2NTRzLS42NjUzIDEuMDAzOC0uNjY1MyAxLjYwNjJjLjAwMDIuNjAyNS4yMzk2IDEuMTgwMS42NjU2IDEuNjA2MS40MjU5LjQyNiAxLjAwMzYuNjY1NCAxLjYwNi42NjU2LjYwMjUgMCAxLjE4MDMtLjIzOTQgMS42MDYzLS42NjU0cy42NjUzLTEuMDAzOC42NjUzLTEuNjA2M2MuMDAwMS0uMjk4My0uMDU4Ni0uNTkzNy0uMTcyNy0uODY5NC0uMTE0MS0uMjc1Ni0uMjgxNC0uNTI2MS0uNDkyNC0uNzM3LS4yMTA5LS4yMTEtLjQ2MTQtLjM3ODMtLjczNzEtLjQ5MjQtLjI3NTYtLjExNDItLjU3MS0uMTcyOS0uODY5NC0uMTcyOHoiLz48cGF0aCBkPSJtMTQuNTgxIDIyLjcyOTJjLS41OTY5IDAtMS4xNjk0LjIzNzItMS41OTE1LjY1OTMtLjQyMi40MjItLjY1OTIuOTk0NS0uNjU5MiAxLjU5MTRzLjIzNzIgMS4xNjk0LjY1OTIgMS41OTE1Yy40MjIxLjQyMi45OTQ2LjY1OTIgMS41OTE1LjY1OTJzMS4xNjk0LS4yMzcyIDEuNTkxNS0uNjU5MmMuNDIyLS40MjIxLjY1OTItLjk5NDYuNjU5Mi0xLjU5MTUgMC0uMjk1Ni0uMDU4My0uNTg4Mi0uMTcxNC0uODYxM3MtLjI3ODgtLjUyMTItLjQ4NzgtLjczMDFjLS4yMDktLjIwOS0uNDU3MS0uMzc0OC0uNzMwMi0uNDg3OS0uMjczMS0uMTEzMi0uNTY1Ny0uMTcxNC0uODYxMy0uMTcxNHoiLz48cGF0aCBkPSJtMzEuMjc0OSAyMC4yOTg2Yy0xLjU1MjItLjUyMTUtMi4wOTU1LS42MzI1LTQuMDc5OS0uOTU2OS0uMzgzNC0uMDYyOS0uNzQ5LS4yMDcyLTEuMDAyLS41MDE0bC0zLjEyMTQtMi45OTQ5Yy0uNDAxLS4zODM5LS45MTc5LS42MjQzLTEuNDY5OS0uNjgzNy0yLjE2NDctLjIzOTItNC4zNDg1LS4yNDk0LTYuNTE1My0uMDMwMy0uMzY2NS4wMzQyLS43MjEzLjE0NjUtMS4wNDA4LjMyOTQtLjMxOTQuMTgyOC0uNTk1OS40MzItLjgxMDkuNzMwN2wtMS42OTg5IDIuMzczM2MtLjA4MTEuMTE1NS0uMjAwOS4xOTgtLjMzNzYuMjMyOGwtMS4wNC4yNjI0Yy0uMzA4NjguMDc3OS0uNTgwNzIuMjYwOC0uNzY5NTcuNTE3MS0uMTg4ODUuMjU2NC0uMjgyNzUuNTcwNC0uMjY1NjguODg4NGwuMTczODIgMy4yMzg2Yy4wMTg4Ny4zNTEuMTcxNTYuNjgxNC40MjY2Ni45MjMycy41OTMxNy4zNzY2Ljk0NDY3LjM3NjdoLjUyNjJjMC0uMDA2MiAwLS4wMTI0IDAtLjAxODYgMC0uNDQ0OS4wODc3LS44ODU0LjI1NzktMS4yOTY0cy40MTk4LS43ODQ0LjczNDMtMS4wOTljLjMxNDYtLjMxNDYuNjg4MS0uNTY0MSAxLjA5OTEtLjczNDMuNDExLS4xNzAzLjg1MTUtLjI1NzkgMS4yOTY0LS4yNTc5LjQ0NDggMCAuODg1My4wODc2IDEuMjk2Mi4yNTc5LjQxMS4xNzAyLjc4NDQuNDE5OCAxLjA5ODkuNzM0My4zMTQ1LjMxNDYuNTY0LjY4ODEuNzM0MSAxLjA5OTEuMTcwMi40MTEuMjU3Ny44NTE1LjI1NzYgMS4yOTYzdi4wMTg2aDYuMTMxMWMwLS4wMDYyIDAtLjAxMjQgMC0uMDE4Ni0uMDAwMS0uNDQ0OC4wODc1LS44ODUzLjI1NzYtMS4yOTYzLjE3MDItLjQxMS40MTk2LS43ODQ1LjczNDEtMS4wOTkxLjMxNDUtLjMxNDUuNjg4LS41NjQxIDEuMDk4OS0uNzM0My40MTEtLjE3MDMuODUxNS0uMjU3OSAxLjI5NjMtLjI1NzkuODk4NCAwIDEuNzYwMS4zNTY5IDIuMzk1NC45OTIycy45OTIyIDEuNDk3Ljk5MjIgMi4zOTU0di4wMTg2aC40NDAxYy4yMTQ1IDAgLjQyMjEtLjA3NjMuNTg1NS0uMjE1NHMuMjcxOS0uMzMxOC4zMDYyLS41NDM2bC4yMzc1LTIuMTIzNGMuMDQzOC0uMzkxOC0uMDQ4NS0uNzg2OC0uMjYxMy0xLjExODdzLS41MzMyLS41ODA1LS45MDc1LS43MDQzem0tMTMuODg2Ni0xLjM5Ny0zLjU3LS4wMzk1Yy0uMDYwNS0uMDAxLS4xMTk5LS4wMTY2LS4xNzMxLS4wNDU1LS4wNTMxLS4wMjg5LS4wOTg1LS4wNzAzLS4xMzIyLS4xMjA1LS4wMzM3LS4wNTAzLS4wNTQ3LS4xMDgtLjA2MTMtLjE2ODEtLjAwNjYtLjA2MDIuMDAxNS0uMTIxLjAyMzYtLjE3NzRsLjU4MDUtMS40NzQ2Yy4wNzE1LS4xODMxLjE5MjctLjM0MjcuMzUtLjQ2MDcuMTU3Mi0uMTE4MS4zNDQzLS4xODk5LjU0MDEtLjIwNzUuNTQ5NS0uMDQ3MyAxLjgzNjMtLjA3NzYgMi40NDQ3LS4xMDI0em02LjE0ODIuMDkzOS00LjkwMTgtLjA3NzZ2LTIuODM0MmMuODc3OS0uMDExNCAxLjc1NTYuMDMzMiAyLjYyNzguMTMzNC4yNDUyLjAyMzMuNDcyOS4xMzcuNjM4OC4zMTlsMS44MzQ2IDIuMDE3OWMuMDM0MS4wMzgyLjA1NjQuMDg1NS4wNjQyLjEzNjEuMDA3Ny4wNTA3LjAwMDYuMTAyNS0uMDIwNS4xNDkxLS4wMjExLjA0NjctLjA1NTMuMDg2Mi0uMDk4NS4xMTM4LS4wNDMxLjAyNzctLjA5MzQuMDQyMi0uMTQ0Ni4wNDE4eiIvPjwvZz48ZyBmaWxsPSIjZmZlNDZlIj48cGF0aCBkPSJtMjEuNTgzNCAxMS4yNDA4Yy0uMTY5Ni0uMjA0Ni0uMzk1MS0uMzU1NC0uNjQ5LS40MzM4LS4yNTM5LS4wNzg1LS41MjUyLS4wODEyLS43ODA2LS4wMDc4LS45MjEyLjI0NTItMS42OTI3IDEuMjk4NC0yLjA3NjggMi43ODM4LS4zODgxLTEuNDg1NC0xLjE1NTYtMi41Mzg2LTIuMDc2OC0yLjc4MzgtLjI1NTUtLjA3MjktLjUyNjYtLjA2OTktLjc4MDQuMDA4NXMtLjQ3OTMuMjI4OS0uNjQ5Mi40MzMxYy0uMzI2LjM3NzItLjQwMi45MDU3LS4yMDMzIDEuNDE0OC4zODQxLjk4NTYgMS42Mjk4IDEuNjkwMyAzLjMzMjUgMS44ODQzbC4xNzc3LjAyMDJoLjQwOThsLjE2NjEtLjAxODZjMS43MDI3LS4xOTQgMi45NDkxLS44OTg3IDMuMzMzMy0xLjg4NDQuMTk4Ny0uNTEwNi4xMjI2LTEuMDM5MS0uMjAzMy0xLjQxNjN6bS02LjIwODggMS4xNDYzYy0uMDM3Mi0uMDk2My0uMDc3Ni0uMjc4Ny4wNDA0LS40MTkxLjAzNi0uMDQ3NC4wODIzLS4wODYuMTM1NC0uMTEyOXMuMTExNi0uMDQxNC4xNzExLS4wNDIzYy4wNDI4LjAwMDQuMDg1My4wMDY0LjEyNjYuMDE3OC4zNzk1LjEwMDkuODQyLjYxMTYgMS4xMTk4IDEuNTQwNS0uOTYzOS0uMjA2NC0xLjQ1OS0uNjQxOC0xLjU5MzMtLjk4NHptNS40MDU1IDBjLS4xMzQzLjM0NDYtLjYyOTQuNzc2MS0xLjU5MzMuOTg3Mi4yNzg2LS45MzE0Ljc0MTItMS40Mzk3IDEuMTE5OS0xLjU0MDYuMDQxNS0uMDExMy4wODQyLS4wMTczLjEyNzMtLjAxNzguMDYwMS4wMDAzLjExOTQuMDE0NS4xNzMzLjA0MTQuMDUzOC4wMjY5LjEwMDcuMDY1OC4xMzcxLjExMzguMTE3Mi4xMzczLjA3MjkuMzE5Ny4wMzQ5LjQxNnoiLz48cGF0aCBkPSJtMTguODQ3OSAxNC45NzQ2aC0xLjQ1OTh2MTAuMDA3N2gxLjQ1OTh6Ii8+PC9nPjwvc3ZnPg=='
                alt='car icon'
                className='dxuNru'
              />
              <div className='jCnDwj' style={{ textAlign: "initial" }}>
                <p className='bmEcnf'>Looking to insure your new car?</p>
                <p className='iPIVCw'>
                  Save big with our zero commission insurance
                </p>
              </div>
              <button className='czglFH'>Get a quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
