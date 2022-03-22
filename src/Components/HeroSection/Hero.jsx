import { useState } from "react";
import "./hero.css";
import { HomeSearch } from "./HomeSearch";
import link from "../Images/License.png"
import link1 from "../Images/Star.png"
import link2 from "../Images/Users.png"
import { lineHeight } from "@mui/system";
export const Hero = () => {
  const [isCarClicked, setCarClicked] = useState(true);
  const [isBikeClicked, setBikeClicked] = useState(false);
  const [isHealthClicked, setHealthClicked] = useState(false);
  function handleBike(e) {
    setCarClicked(false);
    setHealthClicked(false);
    setBikeClicked(true);
  }
  function handleCar(e) {
    setHealthClicked(false);
    setBikeClicked(false);
    setCarClicked(true);
  }
  function handleHealth(e) {
    setCarClicked(false);
    setBikeClicked(false);
    setHealthClicked(true);
  }
  return (
    <div className='hero-div'>
      <div className='left-image'>
        <img
          src='https://acko-home-prod.ackoassets.com/next_assets/6cfee294eb0ba0a61f1100811fda667701b09450/_next/static/images/homepage-banner-illustration-1-5d2a4d352884a025c5e728efb0a4c6ce.svg'
          alt=''
          className='cOTRjA'
        ></img>
      </div>
      <div className='FPpoI'>
        <div className='dhkjzO'>
          <div className='eLKcAo'>
            <h1 className='jFZtMc'>Insurance made easy</h1>
            <p className='dBdUlO'>Zero commission. Zero paperwork</p>
          </div>
        </div>
        
        <div className='kTHxXM'>
          
         
          <div className='NChTW' id="responsive_class_laptopsize">
            <div className='kdQsEA'>
              <div
                className={
                  isCarClicked ? "gHvwWd hover-cntr" : "cecEko hover-cntr"
                }
              >
                <div onClick={handleCar}>
                  <div className='hYLHSQ'>
                    <div className={isCarClicked ? "hBzqTn" : "dgfTQq"}>
                      <img
                        src={
                          isCarClicked
                            ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgZmlsbD0iIzdjNDdlMSI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii0xNi45MzUiLz48cGF0aCBkPSJNMzIuMDg2IDE3LjE0N2MtMi4wNDMtLjcwNC0yLjc1My0uODQ5LTUuMzUzLTEuMjg1LS41MDMtLjA4OS0uOTgzLS4yNzktMS4zMTEtLjY3bC00LjA5Ny00LjAyMmMtLjUyNC0uNTE0LTEuMjAyLS44MzgtMS45MzQtLjkxNmEzOS43OCAzOS43OCAwIDAgMC04LjU1NS0uMDQ1Yy0uOTcyLjEwMS0xLjg1Ny42MTQtMi40MjUgMS40MTlsLTIuMjQgMy4xODRhLjc2Ljc2IDAgMCAxLS40NDguMzEzbC0xLjM1NS4zNDZjLS44NDEuMjIzLTEuNDA5IDEuMDE3LTEuMzY2IDEuODg4bC4yMjkgNC4zNDZjLjA1NS45ODMuODQxIDEuNzQzIDEuODAzIDEuNzQzaC42ODh2LS4wMjJjMC0yLjUxNCAxLjk4OC00LjU0OCA0LjQ0Ny00LjU0OHM0LjQ0NyAyLjAzNCA0LjQ0NyA0LjU0OHYuMDIyaDguMDQxdi0uMDIyYzAtMi41MTQgMS45ODgtNC41NDggNC40NDctNC41NDhzNC40NDcgMi4wMzQgNC40NDcgNC41NDh2LjAyMmguNTc5Yy41NzkgMCAxLjA4Mi0uNDM2IDEuMTY5LTEuMDE3bC4zMTctMi44NDljLjEwOS0xLjA3My0uNTI0LTIuMTAxLTEuNTI5LTIuNDM2ek0xMi45NDUgMTUuMjdsLTMuNzgtLjA1NmMtLjMzOSAwLS41NzktLjM1Ny0uNDQ4LS42ODJsLjc2NS0xLjk3OGMuMTk3LS41MDMuNjQ1LS44NDkgMS4xNjktLjg5NGwyLjI5NC0uMTM0djMuNzQzem04Ljk4MS4xMjNsLTcuMzQyLS4xMDF2LTMuODFsNC4zNTkuMTc5YTEuMzEgMS4zMSAwIDAgMSAuODQxLjQyNWwyLjQwNCAyLjcwNGMuMjA4LjIzNS4wNDQuNjAzLS4yNjIuNjAzeiIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0yNy4xMDUgMjAuMTYzYy0xLjc3IDAtMy4yMDEgMS40NjQtMy4yMDEgMy4yNzRzMS40MzEgMy4yNzQgMy4yMDEgMy4yNzQgMy4yMDEtMS40NjQgMy4yMDEtMy4yNzQtMS40MzEtMy4yNzQtMy4yMDEtMy4yNzR6Ii8+PC9kZWZzPjwvc3ZnPg=="
                            : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii0xNi45MzUiLz48cGF0aCBkPSJNMzIuMDg2IDE3LjE0N2MtMi4wNDMtLjcwNC0yLjc1My0uODQ5LTUuMzUzLTEuMjg1LS41MDMtLjA4OS0uOTgzLS4yNzktMS4zMTEtLjY3bC00LjA5Ny00LjAyMmMtLjUyNC0uNTE0LTEuMjAyLS44MzgtMS45MzQtLjkxNmEzOS43OCAzOS43OCAwIDAgMC04LjU1NS0uMDQ1Yy0uOTcyLjEwMS0xLjg1Ny42MTQtMi40MjUgMS40MTlsLTIuMjQgMy4xODRhLjc2Ljc2IDAgMCAxLS40NDguMzEzbC0xLjM1NS4zNDZjLS44NDEuMjIzLTEuNDA5IDEuMDE3LTEuMzY2IDEuODg4bC4yMjkgNC4zNDZjLjA1NS45ODMuODQxIDEuNzQzIDEuODAzIDEuNzQzaC42ODh2LS4wMjJjMC0yLjUxNCAxLjk4OC00LjU0OCA0LjQ0Ny00LjU0OHM0LjQ0NyAyLjAzNCA0LjQ0NyA0LjU0OHYuMDIyaDguMDQxdi0uMDIyYzAtMi41MTQgMS45ODgtNC41NDggNC40NDctNC41NDhzNC40NDcgMi4wMzQgNC40NDcgNC41NDh2LjAyMmguNTc5Yy41NzkgMCAxLjA4Mi0uNDM2IDEuMTY5LTEuMDE3bC4zMTctMi44NDljLjEwOS0xLjA3My0uNTI0LTIuMTAxLTEuNTI5LTIuNDM2ek0xMi45NDUgMTUuMjdsLTMuNzgtLjA1NmMtLjMzOSAwLS41NzktLjM1Ny0uNDQ4LS42ODJsLjc2NS0xLjk3OGMuMTk3LS41MDMuNjQ1LS44NDkgMS4xNjktLjg5NGwyLjI5NC0uMTM0djMuNzQzem04Ljk4MS4xMjNsLTcuMzQyLS4xMDF2LTMuODFsNC4zNTkuMTc5YTEuMzEgMS4zMSAwIDAgMSAuODQxLjQyNWwyLjQwNCAyLjcwNGMuMjA4LjIzNS4wNDQuNjAzLS4yNjIuNjAzeiIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0yNy4xMDUgMjAuMTYzYy0xLjc3IDAtMy4yMDEgMS40NjQtMy4yMDEgMy4yNzRzMS40MzEgMy4yNzQgMy4yMDEgMy4yNzQgMy4yMDEtMS40NjQgMy4yMDEtMy4yNzQtMS40MzEtMy4yNzQtMy4yMDEtMy4yNzR6Ii8+PC9kZWZzPjwvc3ZnPg=="
                        }
                        alt='car icon'
                        className='jsx-2639780352 hover-opacity'
                        style={{ width: "36px", height: "36px" }}
                      ></img>
                    </div>
                  </div>
                  <div
                    className={isCarClicked ? "hRvsJU" : "hRvsJU hover-opacity"}
                  >
                    Car & taxi
                  </div>
                </div>
              </div>
              <div
                className={
                  isBikeClicked ? "gHvwWd hover-cntr" : "cecEko hover-cntr"
                }
              >
                <div onClick={handleBike}>
                  <div className='hYLHSQ'>
                    <div className={isBikeClicked ? "hBzqTn" : "dgfTQq"}>
                      <img
                        src={
                          isBikeClicked
                            ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iIzdjNDdlMSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg=="
                            : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg=="
                        }
                        alt='car icon'
                        className='jsx-2639780352 hover-opacity'
                        style={{ width: "36px", height: "36px" }}
                      ></img>
                    </div>
                  </div>
                  <div
                    className={
                      isBikeClicked ? "hRvsJU" : "hRvsJU hover-opacity"
                    }
                  >
                    Bike
                  </div>
                </div>
              </div>{" "}
              <div
                className={
                  isHealthClicked ? "gHvwWd hover-cntr" : "cecEko hover-cntr"
                }
              >
                <div>
                  <div className='hYLHSQ'>
                    <div className='dgfTQq'>
                      <img
                        src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0ibm9uZSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTguNTU0IDIxLjcyMmMtLjI1NS4yNTUtLjUxLjI1NS0uNzY1LjI1NXMtLjUxLS4xMjgtLjc2NS0uMjU1bC0zLjgyNi0zLjY5OGMtLjM4My0uMzgzLS4zODMtMS4xNDggMC0xLjUzczEuMTQ4LS4zODMgMS41MyAwbDMuMDYxIDIuOTMzIDEwLjA3NC05LjQzN2MtLjg5My0uODkzLTIuMTY4LTEuNjU4LTMuODI2LTEuOTEzLTMuODI2LS42MzgtNi4yNDkgMi45MzMtNi4yNDkgMi45MzNzLTIuMjk1LTMuNDQzLTYuMTIxLTIuODA2Yy01LjEwMS43NjUtNi43NTkgNS44NjYtNC45NzMgMTAuNTg1IDEuNzg1IDQuODQ2IDguMTYyIDguNTQ0IDEwLjMzIDkuNjkyLjUxLjI1NSAxLjAyLjI1NSAxLjUzIDAgMi4xNjgtMS4xNDggOC41NDQtNC43MTggMTAuNDU3LTkuODE5Ljg5My0yLjQyMy44OTMtNC44NDYgMC02Ljg4NmwtMTAuNDU3IDkuOTQ3eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='
                        alt='car icon'
                        className='jsx-2639780352 hover-opacity'
                        style={{ width: "36px", height: "36px" }}
                      ></img>
                    </div>
                  </div>
                  <div className='hRvsJU hover-opacity'>Health</div>
                </div>
              </div>
            </div>

            
          </div>
{/* OK */}
          <div className='NChTW' id="responsive_class_768">
            <div className='kdQsEA'>
              <div
                className={
                  isCarClicked ? "gHvwWd hover-cntr" : "cecEko hover-cntr"
                }
              >
                <div onClick={handleCar}>
                  <div className='hYLHSQ'>
                    <div className={isCarClicked ? "logo-change-768" : "dgfTQq"}>
                      <img
                        src={
                          isCarClicked
                            ? "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE3IiB2aWV3Qm94PSIwIDAgMzAgMTciIHdpZHRoPSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMjMuMSA5LjczOTc1Yy0xLjY5NjIgMC0zLjA2NzggMS40MDI3NS0zLjA2NzggMy4xMzczNSAwIDEuNzM0NyAxLjM3MTYgMy4xMzc0IDMuMDY3OCAzLjEzNzRzMy4wNjc4LTEuNDAyNyAzLjA2NzgtMy4xMzc0YzAtMS43MzQ2LTEuMzcxNi0zLjEzNzM1LTMuMDY3OC0zLjEzNzM1eiIvPjxwYXRoIGQ9Im02Ljg3MTQ5IDkuNzM5NzVjLTEuNjk2MTggMC0zLjA2Nzc4IDEuNDAyNzUtMy4wNjc3OCAzLjEzNzM1IDAgMS43MzQ3IDEuMzcxNiAzLjEzNzQgMy4wNjc3OCAzLjEzNzRzMy4wNjc3OS0xLjQwMjcgMy4wNjc3OS0zLjEzNzRjMC0xLjczNDYtMS4zNzE2MS0zLjEzNzM1LTMuMDY3NzktMy4xMzczNXoiLz48cGF0aCBkPSJtMjcuODc0MSA2Ljg0OTM5Yy0xLjk1OC0uNjc0NTktMi42Mzg2LS44MTM3OS01LjEzMDUtMS4yMzEzOS0uNDgxNi0uMDg1NjYtLjk0MjMtLjI2NzctMS4yNTY0LS42NDI0N2wtMy45MjYzLTMuODU0NzhjLS41MDI2LS40OTI1NTMtMS4xNTE4LS44MDMwNzctMS44NTMzLS44NzgwMzEtMi44MDYtLjMxMDUyNDMtNS4zMTg5LS4zMjEyMzIxLTguMTk4MTgtLjA0MjgzMS0uOTMxODUuMDk2MzY5LTEuNzc5OTQuNTg4OTI1LTIuMzI0MzkgMS4zNTk4ODJsLTIuMTQ2NCAzLjA1MTdjLS4xMDQ3LjE0OTkxLS4yNTEyOS4yNTY5OS0uNDI5MjguMjk5ODJsLTEuMjk4MzEuMzMxOTRjLS44MDYyMS4yMTQxNS0xLjM1MDY2MjMuOTc0NC0xLjMwODc4MTM3IDEuODA5NmwuMjE5ODc1MzcgNC4xNjUyN2MuMDUyMzUxLjk0MjMuODA2MjA2IDEuNjcwNCAxLjcyNzU4NiAxLjY3MDRoLjY1OTYzYzAtLjAxMDcgMC0uMDEwNyAwLS4wMjE0IDAtMi40MDkyIDEuOTA1NTgtNC4zNTgwMiA0LjI2MTM5LTQuMzU4MDIgMi4zNTU4IDAgNC4yNjEzNiAxLjk0ODgyIDQuMjYxMzYgNC4zNTgwMnYuMDIxNGg3LjcwNjFjMC0uMDEwNyAwLS4wMTA3IDAtLjAyMTQgMC0yLjQwOTIgMS45MDU2LTQuMzU4MDIgNC4yNjE0LTQuMzU4MDJzNC4yNjE0IDEuOTQ4ODIgNC4yNjE0IDQuMzU4MDJ2LjAyMTRoLjU1NDljLjU1NSAwIDEuMDM2Ni0uNDE3NiAxLjEyMDMtLjk3NDRsLjMwMzctMi43MzA0M2MuMTA0Ny0xLjAyNzk0LS41MDI2LTIuMDEzMDUtMS40NjU4LTIuMzM0Mjh6bS0xOC4zNDM5Mi0xLjc5ODktMy42MjI3LS4wNTM1NGMtLjMyNDU4IDAtLjU1NDkzLS4zNDI2NS0uNDI5MjgtLjY1MzE3bC43MzI5MS0xLjg5NTI3Yy4xODg0Ny0uNDgxODUuNjE3NzUtLjgxMzc5IDEuMTIwMzItLjg1NjYyLjY5MTA0LS4wNjQyNCAxLjQzNDQyLS4xMDcwNyAyLjE5ODc1LS4xMjg0OXptOC42MDY1Mi4xMTc3OC03LjAzNi0uMDk2Mzd2LTMuNjUxMzNjMS40NjU5LS4wMTA3MSAyLjkzMTcuMDQyODMgNC4xNzc2LjE3MTMyLjMwMzcuMDMyMTMuNTk2OS4xNzEzMy44MDYzLjQwNjlsMi4zMDM0IDIuNTkxMjdjLjE5ODkuMjI0ODYuMDQxOS41NzgyMS0uMjUxMy41NzgyMXoiLz48L2c+PC9zdmc+"
                            : "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE3IiB2aWV3Qm94PSIwIDAgMzAgMTciIHdpZHRoPSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2U0NjUxIj48cGF0aCBkPSJtMjMuMSA5LjczOTc1Yy0xLjY5NjIgMC0zLjA2NzggMS40MDI3NS0zLjA2NzggMy4xMzczNSAwIDEuNzM0NyAxLjM3MTYgMy4xMzc0IDMuMDY3OCAzLjEzNzRzMy4wNjc4LTEuNDAyNyAzLjA2NzgtMy4xMzc0YzAtMS43MzQ2LTEuMzcxNi0zLjEzNzM1LTMuMDY3OC0zLjEzNzM1eiIvPjxwYXRoIGQ9Im02Ljg3MTQ5IDkuNzM5NzVjLTEuNjk2MTggMC0zLjA2Nzc4IDEuNDAyNzUtMy4wNjc3OCAzLjEzNzM1IDAgMS43MzQ3IDEuMzcxNiAzLjEzNzQgMy4wNjc3OCAzLjEzNzRzMy4wNjc3OS0xLjQwMjcgMy4wNjc3OS0zLjEzNzRjMC0xLjczNDYtMS4zNzE2MS0zLjEzNzM1LTMuMDY3NzktMy4xMzczNXoiLz48cGF0aCBkPSJtMjcuODc0MSA2Ljg0OTM5Yy0xLjk1OC0uNjc0NTktMi42Mzg2LS44MTM3OS01LjEzMDUtMS4yMzEzOS0uNDgxNi0uMDg1NjYtLjk0MjMtLjI2NzctMS4yNTY0LS42NDI0N2wtMy45MjYzLTMuODU0NzhjLS41MDI2LS40OTI1NTMtMS4xNTE4LS44MDMwNzctMS44NTMzLS44NzgwMzEtMi44MDYtLjMxMDUyNDMtNS4zMTg5LS4zMjEyMzIxLTguMTk4MTgtLjA0MjgzMS0uOTMxODUuMDk2MzY5LTEuNzc5OTQuNTg4OTI1LTIuMzI0MzkgMS4zNTk4ODJsLTIuMTQ2NCAzLjA1MTdjLS4xMDQ3LjE0OTkxLS4yNTEyOS4yNTY5OS0uNDI5MjguMjk5ODJsLTEuMjk4MzEuMzMxOTRjLS44MDYyMS4yMTQxNS0xLjM1MDY2MjMuOTc0NC0xLjMwODc4MTM3IDEuODA5NmwuMjE5ODc1MzcgNC4xNjUyN2MuMDUyMzUxLjk0MjMuODA2MjA2IDEuNjcwNCAxLjcyNzU4NiAxLjY3MDRoLjY1OTYzYzAtLjAxMDcgMC0uMDEwNyAwLS4wMjE0IDAtMi40MDkyIDEuOTA1NTgtNC4zNTgwMiA0LjI2MTM5LTQuMzU4MDIgMi4zNTU4IDAgNC4yNjEzNiAxLjk0ODgyIDQuMjYxMzYgNC4zNTgwMnYuMDIxNGg3LjcwNjFjMC0uMDEwNyAwLS4wMTA3IDAtLjAyMTQgMC0yLjQwOTIgMS45MDU2LTQuMzU4MDIgNC4yNjE0LTQuMzU4MDJzNC4yNjE0IDEuOTQ4ODIgNC4yNjE0IDQuMzU4MDJ2LjAyMTRoLjU1NDljLjU1NSAwIDEuMDM2Ni0uNDE3NiAxLjEyMDMtLjk3NDRsLjMwMzctMi43MzA0M2MuMTA0Ny0xLjAyNzk0LS41MDI2LTIuMDEzMDUtMS40NjU4LTIuMzM0Mjh6bS0xOC4zNDM5Mi0xLjc5ODktMy42MjI3LS4wNTM1NGMtLjMyNDU4IDAtLjU1NDkzLS4zNDI2NS0uNDI5MjgtLjY1MzE3bC43MzI5MS0xLjg5NTI3Yy4xODg0Ny0uNDgxODUuNjE3NzUtLjgxMzc5IDEuMTIwMzItLjg1NjYyLjY5MTA0LS4wNjQyNCAxLjQzNDQyLS4xMDcwNyAyLjE5ODc1LS4xMjg0OXptOC42MDY1Mi4xMTc3OC03LjAzNi0uMDk2Mzd2LTMuNjUxMzNjMS40NjU5LS4wMTA3MSAyLjkzMTcuMDQyODMgNC4xNzc2LjE3MTMyLjMwMzcuMDMyMTMuNTk2OS4xNzEzMy44MDYzLjQwNjlsMi4zMDM0IDIuNTkxMjdjLjE5ODkuMjI0ODYuMDQxOS41NzgyMS0uMjUxMy41NzgyMXoiLz48L2c+PC9zdmc+"
                        }
                        alt='car icon'
                        className='jsx-2639780352'
                        style={{ width: "36px", height: "36px" }}
                      ></img>
                    </div>
                  </div>
                  <div
                    className={isCarClicked ? "color-purple" : "color-black"}
                  >
                    Car & taxi
                  </div>
                </div>
              </div>
              <div
                className={
                  isBikeClicked ? "gHvwWd hover-cntr" : "cecEko hover-cntr"
                }
              >
                <div onClick={handleBike}>
                  <div className='hYLHSQ'>
                    <div className={isBikeClicked ? "logo-change-768" : "dgfTQq"}>
                      <img
                        src={
                          isBikeClicked
                            ? "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjggMTgiIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtNC44MTY2NSA3Ljg3OTA1Yy0yLjYzNTUzIDAtNC44MTY2NSAyLjEzNTY1LTQuODE2NjUgNC44MTY2NXMyLjE4MTEyIDQuODE2NyA0LjgxNjY1IDQuODE2NyA0LjgxNjY1LTIuMTgxMiA0LjgxNjY1LTQuODE2Ny0yLjEzNTY4LTQuODE2NjUtNC44MTY2NS00LjgxNjY1em0wIDcuMzYxMjVjLTEuNDA4NjQgMC0yLjU0NDY0LTEuMTM2LTIuNTQ0NjQtMi41NDQ2czEuMTM2LTIuNTQ0NiAyLjU0NDY0LTIuNTQ0NiAyLjU0NDY1IDEuMTM2IDIuNTQ0NjUgMi41NDQ2LTEuMTM2MDEgMi41NDQ2LTIuNTQ0NjUgMi41NDQ2eiIvPjxwYXRoIGQ9Im0yNS41Mzc0IDguNTYwNjUuMzE4LS41NDUyOGMtLjg2MzMtLjQ5OTg0LTEuODE3Ni0uNzcyNDgtMi44MTcyLS43NzI0OC0uMjcyNyAwLS41OTA4LjA0NTQ0LS44NjM0LjA5MDg4bC0zLjEzNTQtNi4zNjE2MTgtMy42ODA2LS45MDg4MDE5Yy0uMzYzNS0uMTgxNzYwMS0uODE3OS4wNDU0Mzk5LS45NTQzLjQ1NDQwMDktLjEzNjMuNDA4OTYxLjA0NTUuODE3OTE5LjQwOS45OTk2NzlsMi41OTAxIDEuMTgxNDUuNDA4OS43NzI0OGMtNC43MjU3LjMxODA4LTYuNTg4OCAyLjgxNzI4LTguNzY5OSAxLjgxNzYtMS40OTk1Mi0uODE3OTItMy44NjI0MS0xLjE4MTQ0LTUuMzE2NDktMS4zNjMyLS42MzYxNi0uMDkwODgtMS4yMjY4OC40MDg5Ni0xLjIyNjg4IDEuMDkwNTYtLjA0NTQ0LjU5MDcyLjQwODk2IDEuMTM2Ljk5OTY4IDEuMTgxNDQgMS4zNjMyLjEzNjMyIDMuMzE3MTMuNDU0NCA0LjQ1MzEzIDEuMDkwNTcgMCAwIDMuMTgwNzYgMS41NDQ5NiAzLjIyNjI2IDUuODYxNzcgMCAuNDA5LjMxODEuNzI3LjcyNy43MjdoMi45MDgyYy4zMTgxIDAgLjU5MDctLjIyNzIuNjgxNi0uNDk5OC4zNjM1LTEuMjI2OSAxLjQwODYtNC4zNjIyNSAzLjcyNjEtNi45OTc3OGwuODYzMyAxLjY4MTI5Yy0xLjQ5OTUuOTk5NjgtMi40OTkyIDIuNjgwOTktMi40OTkyIDQuNTg5NDloLjYzNjJjMCAyLjYzNTUgMi4xODExIDQuODE2NiA0LjgxNjcgNC44MTY2IDIuNjM1NSAwIDQuODYyLTIuMTM1NyA0Ljg2Mi00Ljc3MTIgMC0xLjc3MjItLjk1NDItMy4zMTcxMy0yLjM2MjgtNC4xMzUwNXptLTIuNDUzOCA2LjY3OTY1Yy0xLjQwODYgMC0yLjU0NDctMS4xMzYtMi41NDQ3LTIuNTQ0NnMxLjEzNjEtMi41NDQ2IDIuNTQ0Ny0yLjU0NDYgMi41NDQ2IDEuMTM2IDIuNTQ0NiAyLjU0NDYtMS4xMzYgMi41NDQ2LTIuNTQ0NiAyLjU0NDZ6Ii8+PHBhdGggZD0ibTIxLjY3NDggNC40MjU2MmMuMDkwOS4yMjcyLjMxODEuNDA4OTYuNTkwOC40MDg5NmwxLjA5MDUuMDQ1NDRjLjM2MzUgMCAuNTkwNy0uMzE4MDguNDk5OS0uNjM2MTZsLS42MzYyLTIuNDUzNzdjLS4wNDU0LS4zNjM1Mi0uNDk5OC0uNTQ1MjgtLjc3MjUtLjMxODA4bC0xLjA5MDUuODYzMzZjLS4yMjcyLjE4MTc2LS4zMTgxLjQ5OTg1LS4yMjcyLjc3MjQ5eiIvPjwvZz48L3N2Zz4="
                            : "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjggMTgiIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2U0NjUxIj48cGF0aCBkPSJtNC44MTY2NSA3Ljg3OTA1Yy0yLjYzNTUzIDAtNC44MTY2NSAyLjEzNTY1LTQuODE2NjUgNC44MTY2NXMyLjE4MTEyIDQuODE2NyA0LjgxNjY1IDQuODE2NyA0LjgxNjY1LTIuMTgxMiA0LjgxNjY1LTQuODE2Ny0yLjEzNTY4LTQuODE2NjUtNC44MTY2NS00LjgxNjY1em0wIDcuMzYxMjVjLTEuNDA4NjQgMC0yLjU0NDY0LTEuMTM2LTIuNTQ0NjQtMi41NDQ2czEuMTM2LTIuNTQ0NiAyLjU0NDY0LTIuNTQ0NiAyLjU0NDY1IDEuMTM2IDIuNTQ0NjUgMi41NDQ2LTEuMTM2MDEgMi41NDQ2LTIuNTQ0NjUgMi41NDQ2eiIvPjxwYXRoIGQ9Im0yNS41Mzc0IDguNTYwNjUuMzE4LS41NDUyOGMtLjg2MzMtLjQ5OTg0LTEuODE3Ni0uNzcyNDgtMi44MTcyLS43NzI0OC0uMjcyNyAwLS41OTA4LjA0NTQ0LS44NjM0LjA5MDg4bC0zLjEzNTQtNi4zNjE2MTgtMy42ODA2LS45MDg4MDE5Yy0uMzYzNS0uMTgxNzYwMS0uODE3OS4wNDU0Mzk5LS45NTQzLjQ1NDQwMDktLjEzNjMuNDA4OTYxLjA0NTUuODE3OTE5LjQwOS45OTk2NzlsMi41OTAxIDEuMTgxNDUuNDA4OS43NzI0OGMtNC43MjU3LjMxODA4LTYuNTg4OCAyLjgxNzI4LTguNzY5OSAxLjgxNzYtMS40OTk1Mi0uODE3OTItMy44NjI0MS0xLjE4MTQ0LTUuMzE2NDktMS4zNjMyLS42MzYxNi0uMDkwODgtMS4yMjY4OC40MDg5Ni0xLjIyNjg4IDEuMDkwNTYtLjA0NTQ0LjU5MDcyLjQwODk2IDEuMTM2Ljk5OTY4IDEuMTgxNDQgMS4zNjMyLjEzNjMyIDMuMzE3MTMuNDU0NCA0LjQ1MzEzIDEuMDkwNTcgMCAwIDMuMTgwNzYgMS41NDQ5NiAzLjIyNjI2IDUuODYxNzcgMCAuNDA5LjMxODEuNzI3LjcyNy43MjdoMi45MDgyYy4zMTgxIDAgLjU5MDctLjIyNzIuNjgxNi0uNDk5OC4zNjM1LTEuMjI2OSAxLjQwODYtNC4zNjIyNSAzLjcyNjEtNi45OTc3OGwuODYzMyAxLjY4MTI5Yy0xLjQ5OTUuOTk5NjgtMi40OTkyIDIuNjgwOTktMi40OTkyIDQuNTg5NDloLjYzNjJjMCAyLjYzNTUgMi4xODExIDQuODE2NiA0LjgxNjcgNC44MTY2IDIuNjM1NSAwIDQuODYyLTIuMTM1NyA0Ljg2Mi00Ljc3MTIgMC0xLjc3MjItLjk1NDItMy4zMTcxMy0yLjM2MjgtNC4xMzUwNXptLTIuNDUzOCA2LjY3OTY1Yy0xLjQwODYgMC0yLjU0NDctMS4xMzYtMi41NDQ3LTIuNTQ0NnMxLjEzNjEtMi41NDQ2IDIuNTQ0Ny0yLjU0NDYgMi41NDQ2IDEuMTM2IDIuNTQ0NiAyLjU0NDYtMS4xMzYgMi41NDQ2LTIuNTQ0NiAyLjU0NDZ6Ii8+PHBhdGggZD0ibTIxLjY3NDggNC40MjU2MmMuMDkwOS4yMjcyLjMxODEuNDA4OTYuNTkwOC40MDg5NmwxLjA5MDUuMDQ1NDRjLjM2MzUgMCAuNTkwNy0uMzE4MDguNDk5OS0uNjM2MTZsLS42MzYyLTIuNDUzNzdjLS4wNDU0LS4zNjM1Mi0uNDk5OC0uNTQ1MjgtLjc3MjUtLjMxODA4bC0xLjA5MDUuODYzMzZjLS4yMjcyLjE4MTc2LS4zMTgxLjQ5OTg1LS4yMjcyLjc3MjQ5eiIvPjwvZz48L3N2Zz4="
                        }
                        alt='car icon'
                        className='jsx-2639780352'
                        style={{ width: "36px", height: "36px" }}
                      ></img>
                    </div>
                  </div>
                  <div
                    className={
                      isBikeClicked ? "color-purple" : "color-black"
                    }
                  >
                    Bike
                  </div>
                </div>
              </div>{" "}
              <div
                className={
                  isHealthClicked ? "gHvwWd hover-cntr" : "cecEko hover-cntr"
                }
              >
                <div>
                  <div className='hYLHSQ'>
                    <div className='dgfTQq'>
                      <img
                        src='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTcuMDMxMSAyMC4xNDk4Yy0uMjQ0NC4yNDQ0LS40ODg5LjI0NDQtLjczMzMuMjQ0NHMtLjQ4ODgtLjEyMjItLjczMzMtLjI0NDRsLTMuNjY2My0zLjU0NDJjLS4zNjY3LS4zNjY2LS4zNjY3LTEuMDk5OSAwLTEuNDY2NS4zNjY2LS4zNjY3IDEuMDk5OS0uMzY2NyAxLjQ2NjUgMGwyLjkzMzEgMi44MTA4IDkuNjU0OC05LjA0MzY0Yy0uODU1NS0uODU1NDktMi4wNzc2LTEuNTg4NzYtMy42NjY0LTEuODMzMTgtMy42NjY0LS42MTEwNi01Ljk4ODQgMi44MTA4Ny01Ljk4ODQgMi44MTA4N3MtMi4xOTk4LTMuMjk5NzItNS44NjYyLTIuNjg4NjZjLTQuODg4NDQuNzMzMjctNi40NzcxOSA1LjYyMTcxLTQuNzY2MjIgMTAuMTQzNjEgMS43MTA5NiA0LjY0NCA3LjgyMTUyIDguMTg4MiA5Ljg5OTEyIDkuMjg4MS40ODg5LjI0NDQuOTc3Ny4yNDQ0IDEuNDY2NiAwIDIuMDc3Ni0xLjA5OTkgOC4xODgyLTQuNTIxOSAxMC4wMjE0LTkuNDEwMy44NTU0LTIuMzIyMS44NTU0LTQuNjQ0MSAwLTYuNTk5NXoiIGZpbGw9IiMzZTQ2NTEiLz48L3N2Zz4='
                        alt='car icon'
                        className='jsx-2639780352'
                        style={{ width: "36px", height: "36px" }}
                      ></img>
                    </div>
                  </div>
                  <div className='hRvsJU ' style={{color:"black"}}>Health</div>
                </div>
              </div>
            </div>
          </div>
          
        


         



          <HomeSearch
            status={{ isBikeClicked, isCarClicked, isHealthClicked }}
          ></HomeSearch>
        </div>
        <div className='jvkGuk'>
          <div className='yVRNl'>
            <img
              src='https://acko-home-prod.ackoassets.com/next_assets/6cfee294eb0ba0a61f1100811fda667701b09450/_next/static/images/arshad-warsi-banner-58d51f52b11fa83c7786a80bd1a02169.png'
              alt='Arshad Warsi'
              className='kyrdb'
            ></img>
          </div>
          <div className='abcd'>
            <div className='dcba'>
              <img
                alt=''
                aria-hidden='true'
                role='presentation'
                className='ggggg'
                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc3IiBoZWlnaHQ9IjY3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=='
              ></img>
            </div>
            <img
              alt='Low premium ACKO Car Insurance'
              src='https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F6cfee294eb0ba0a61f1100811fda667701b09450%2F_next%2Fstatic%2Fimages%2Ftypo-low-premium-new-884973769e7a8f45764b63addb7a6b14.svg&amp;w=384&amp;q=75'
              decoding='async'
              srcSet='https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F6cfee294eb0ba0a61f1100811fda667701b09450%2F_next%2Fstatic%2Fimages%2Ftypo-low-premium-new-884973769e7a8f45764b63addb7a6b14.svg&amp;w=256&amp;q=75 1x, /home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F6cfee294eb0ba0a61f1100811fda667701b09450%2F_next%2Fstatic%2Fimages%2Ftypo-low-premium-new-884973769e7a8f45764b63addb7a6b14.svg&amp;w=384&amp;q=75 2x'
              className='bbbbb'
            ></img>
          </div>
        </div>
        <div className='jEAQgT'>
          <div width='26%' className='kuUxhF'>
            <img
              src='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIxIiB2aWV3Qm94PSIwIDAgMjEgMjEiIHdpZHRoPSIyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOC43NzczOSAxNS41NDU5Yy0uNDU5ODYtLjYzODctMS4yNTE4My0uOTcwOC0yLjAxODI1LS44NDMtLjYzODY5LjEwMjItMS4yMjYyOC0uMDc2Ny0xLjY2MDU5LS40MzQzbC0xLjczNzIyIDIuNTAzNiAyLjc4NDY3LS4xNzg4Ljc5MTk3IDIuNjU2OSAyLjI3MzcyLTMuMjcwMWMtLjE1MzI4LS4xMjc3LS4zMDY1Ny0uMjU1NC0uNDM0My0uNDM0M3oiIGZpbGw9IiMxNmMyZjgiLz48cGF0aCBkPSJtMTQuMTE2IDE0LjcwMjRjLS43OTItLjE1MzMtMS41NTg0LjE3ODgtMi4wMTgzLjg0My0uMTAyMS4xNTMzLS4yMDQzLjI4MS0uMzMyMS4zODMybDIuMzI0OCAzLjMyMTIuNzkyLTIuNjU2OSAyLjc4NDcuMTc4OC0xLjc4ODMtMi41ODAzYy0uNDU5OS40MDg4LTEuMDk4Ni42Mzg3LTEuNzYyOC41MTF6IiBmaWxsPSIjMTZjMmY4Ii8+PHBhdGggZD0ibTExLjk0MzggMi41MTYxOWMuNDA4OC41ODc1OSAxLjEyNDEuODY4NjEgMS44MTM5Ljc0MDg4IDEuMjUxOC0uMjI5OTMgMi4zMjQ4Ljg2ODYxIDIuMDk0OSAyLjA5NDg5LS4xMjc4LjY4OTc4LjE3ODggMS40MDUxMS43NDA4IDEuODEzODYgMS4wNDc1LjcxNTMzIDEuMDQ3NSAyLjI0ODE4IDAgMi45NjM0OC0uNTg3Ni40MDg4LS44Njg2IDEuMTI0MS0uNzQwOCAxLjgxMzkuMjI5OSAxLjI1MTgtLjg2ODcgMi4zMjQ4LTIuMDk0OSAyLjA5NDktLjY4OTgtLjEyNzgtMS40MDUxLjE3ODgtMS44MTM5Ljc0MDktLjcxNTMgMS4wNDc0LTIuMjQ4MTcgMS4wNDc0LTIuOTYzNSAwLS40MDg3Ni0uNTg3Ni0xLjEyNDA5LS44Njg3LTEuODEzODctLjc0MDktMS4yNTE4My4yNTU1LTIuMzUwMzctLjgxNzUtMi4xMjA0NC0yLjA2OTQuMTI3NzQtLjY4OTctLjE3ODgzLTEuNDA1MS0uNzQwODctMS44MTM4LTEuMDQ3NDUtLjcxNTM1LTEuMDQ3NDUtMi4yNDgyIDAtMi45NjM1My41ODc1OS0uNDA4NzYuODY4NjEtMS4xMjQwOS43NDA4Ny0xLjgxMzg3LS4yMjk5My0xLjI1MTgyLjg2ODYxLTIuMzI0ODEgMi4wOTQ4OS0yLjA5NDg5LjY4OTc4LjEyNzc0IDEuNDA1MTEtLjE3ODgzIDEuODEzODctLjc0MDg3LjcxNTMzLTEuMDQ3NDUgMi4yNDgxNS0xLjA0NzQ1IDIuOTg5MDUtLjAyNTU1eiIgZmlsbD0iI2QxYzBmZiIvPjxwYXRoIGQ9Im0xMC41MTM3IDEyLjcxYzIuMjg1NyAwIDQuMTM4Ny0xLjg1MyA0LjEzODctNC4xMzg3IDAtMi4yODU3My0xLjg1My00LjEzODY4LTQuMTM4Ny00LjEzODY4LTIuMjg1NzUgMC00LjEzODcgMS44NTI5NS00LjEzODcgNC4xMzg2OCAwIDIuMjg1NyAxLjg1Mjk1IDQuMTM4NyA0LjEzODcgNC4xMzg3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im05LjkyNjg5IDEwLjMwODRjLS4xMjc3MyAwLS4yNTU0Ny0uMDUxMS0uMzU3NjYtLjE1MzNsLTEuMjAwNzMtMS4yMDA3NGMtLjE3ODgzLS4xNzg4My0uMTc4ODMtLjUxMDk1IDAtLjY4OTc4cy41MTA5NS0uMTc4ODMuNjg5NzggMGwuODY4NjEuODY4NjEgMS45MTYxMS0xLjkxNjA2Yy4xNzg4LS4xNzg4My41MTA5LS4xNzg4My42ODk3IDAgLjE3ODkuMTc4ODMuMTc4OS41MTA5NSAwIC42ODk3OGwtMi4yNzM3IDIuMjQ4MTljLS4wNzY2LjEwMjItLjIwNDQuMTUzMy0uMzMyMTEuMTUzM3oiIGZpbGw9IiM5MzY0ZWQiLz48L3N2Zz4='
              alt='Licensed by IRDAI'
              className='fTsrMn'
            />
            <p className='jYHNgx'>Licensed by IRDAI</p>
          </div>
          <div className='jGQoZC'></div>
          <div width='25%' className='crbTvO'>
            <img
              src='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjQgMTYiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgyM3YxNmgtMjN6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Im0xNC45NTMxIDE2LjAwMDJoLTYuMjM0MzV2LTcuNDAxMzVjMC0xLjc0MTUgMS40MjE4NS0zLjE1NjQ3IDMuMTcxODUtMy4xNTY0N3MzLjE3MTkgMS40MTQ5NyAzLjE3MTkgMy4xNTY0N3Y3LjQwMTM1eiIgZmlsbD0iI2Y3NTI3NiIvPjxwYXRoIGQ9Im03Ljg0Mzc1IDE1Ljk5ODFoLTYuMzQzNzV2LTUuMjI0NWMwLTEuNzQxNDUgMS40MjE4OC0zLjE1NjQxIDMuMTcxODgtMy4xNTY0MXMzLjE3MTg3IDEuNDE0OTYgMy4xNzE4NyAzLjE1NjQxeiIgZmlsbD0iIzE2YzJmOCIvPjxwYXRoIGQ9Im0yMi41IDE2LjAwMDFoLTYuMzQzOHYtNC4wMjcyYzAtMS43NDE1IDEuNDIxOS0zLjE1NjQ5IDMuMTcxOS0zLjE1NjQ5czMuMTcxOSAxLjQxNDk5IDMuMTcxOSAzLjE1NjQ5eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xOS4zMjgxIDcuMTgzOTljMS4wODczIDAgMS45Njg4LS44NzcxNSAxLjk2ODgtMS45NTkxOHMtLjg4MTUtMS45NTkxOS0xLjk2ODgtMS45NTkxOS0xLjk2ODcuODc3MTYtMS45Njg3IDEuOTU5MTkuODgxNCAxLjk1OTE4IDEuOTY4NyAxLjk1OTE4eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xMS44OTA2IDMuOTE4MzdjMS4wODczIDAgMS45Njg4LS44NzcxNiAxLjk2ODgtMS45NTkxOSAwLTEuMDgyMDI0LS44ODE1LTEuOTU5MTgtMS45Njg4LTEuOTU5MThzLTEuOTY4NzIuODc3MTU2LTEuOTY4NzIgMS45NTkxOGMwIDEuMDgyMDMuODgxNDIgMS45NTkxOSAxLjk2ODcyIDEuOTU5MTl6IiBmaWxsPSIjZjc1Mjc2Ii8+PHBhdGggZD0ibTQuNjcxODggNi4zMTI5YzEuMDg3MzEgMCAxLjk2ODc0LS44NzcxNiAxLjk2ODc0LTEuOTU5MTkgMC0xLjA4MjAyLS44ODE0My0xLjk1OTE4LTEuOTY4NzQtMS45NTkxOC0xLjA4NzMyIDAtMS45Njg3Ni44NzcxNi0xLjk2ODc2IDEuOTU5MTggMCAxLjA4MjAzLjg4MTQ0IDEuOTU5MTkgMS45Njg3NiAxLjk1OTE5eiIgZmlsbD0iIzE2YzJmOCIvPjwvZz48L3N2Zz4='
              alt='6.2 Crore users'
              className='fTsrMn'
            />
            <p color='white' fontWeight='500' className='jYHNgx'>
              6.2 Crore users
            </p>
          </div>
          <div className='jGQoZC'></div>
          <div className='gAmjmp'>
            <img
              src='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMzMgMTQiIHdpZHRoPSIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgzMS42MzM2djE0aC0zMS42MzM2eiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJtMy40OTIxOSA4LjQ0MTQxLS40MjczIDEuODE5ODloLTEuODE2OGMtLjQyNzQ3OS0uOTYxODYtLjc0ODA5LTIuMDMwNTYtLjc0ODA5LTMuMzEzMDEgMC0xLjE3NTU3LjMyMDYxMS0yLjI0NDI3Ljc0ODA5LTMuMjA2MWwxLjYwMzA2LjMyMDYxLjYzMzIzIDEuNDg0MDhjLS4xMDY4OC40Mjc0OC0uMjA1NzUuOTczOTMtLjIwNTc1IDEuNDAxNDEgMCAuNTM0MzYuMDM3NzggMS4wMTY1NS4yMTM1NiAxLjQ5MzEyeiIgZmlsbD0iI2ZiYmIwMCIvPjxwYXRoIGQ9Im0xNC4wNjI5IDUuNzgxMjVjLjEwNjkuNDI3NDguMTA2OS44NTQ5Ni4xMDY5IDEuMjgyNDQgMCAuNTM0MzUgMCAuOTYxODMtLjEwNjkgMS40OTYxOS0uMzIwNiAxLjYwMzAyLTEuMDkzIDIuOTc4MzItMi4zNzU0IDMuOTQwMTJsLTIuMTEzMTUtLjA5MjgtLjMyMDYxLTEuNzA5OWMuODU0OTYtLjQyNzUgMS40OTYxNi0xLjE3NTU5IDEuODE2NzYtMi4xMzc0MmgtMy43NDA0MnYtMi43Nzg2M2gzLjc0MDQyeiIgZmlsbD0iIzUxOGVmOCIvPjxwYXRoIGQ9Im0xMS44MjgyIDEyLjM5NTZjLTEuMTc1Ni45NjE4LTIuNjcxNzYgMS40OTYyLTQuMzgxNjggMS40OTYyLTIuNjcxNzYgMC01LjAyMjktMS40OTYyLTYuMTk4NDctMy42MzM2bDIuMjQ0MjctMS44MTY3OWMuNjQxMjIgMS42MDMwOSAyLjEzNzQxIDIuNjcxNzkgMy44NDczMyAyLjY3MTc5Ljc0ODA5IDAgMS40OTYxOC0uMjEzOCAyLjEzNzQtLjUzNDR6IiBmaWxsPSIjMjhiNDQ2Ii8+PHBhdGggZD0ibTExLjkzNTEgMS42MDMwNS0yLjI0NDMxIDEuODE2OGMtLjY0MTIyLS4zMjA2MS0xLjM4OTMxLS42NDEyMi0yLjI0NDI3LS42NDEyMi0xLjgxNjc5IDAtMy40MTk4NSAxLjE3NTU3LTMuOTU0MiAyLjc3ODYybC0yLjI0NDI3LTEuODE2NzljMS4xNzU1Ny0yLjI0NDI4IDMuNTI2NzEtMy43NDA0NiA2LjE5ODQ3LTMuNzQwNDYgMS43MDk5MiAwIDMuMzEyOTguNjQxMjIxIDQuNDg4NTggMS42MDMwNXoiIGZpbGw9IiNmMTQzMzYiLz48cGF0aCBkPSJtMzIuMTMyOCA2Ljk0NjU2YzAtMy44NDczMi0zLjIwNjEtNi45NDY1Ni03LjA1MzQtNi45NDY1Ni0zLjg0NzQgMC02Ljk0NjYgMy4wOTkyNC02Ljk0NjYgNi45NDY1NiAwIDMuNTI2NzQgMi41NjQ5IDYuNDEyMjQgNS44Nzc5IDYuOTQ2NTR2LTQuOTE2aC0xLjgxNjh2LTIuMDMwNTRoMS44MTY4di0xLjQ5NjE4YzAtMS43MDk5MiAxLjA2ODctMi42NzE3NSAyLjY3MTctMi42NzE3NS43NDgxIDAgMS42MDMxLjEwNjg3IDEuNjAzMS4xMDY4N3YxLjcwOTkyaC0uODU1Yy0uODU0OSAwLTEuMTc1Ni41MzQzNS0xLjE3NTYgMS4wNjg3djEuMjgyNDRoMS45MjM3bC0uMzIwNiAyLjAzMDU0aC0xLjYwMzF2NC45MTZjMy4zMTMtLjUzNDMgNS44Nzc5LTMuNDE5OCA1Ljg3NzktNi45NDY1NHoiIGZpbGw9IiMxODc3ZjIiLz48cGF0aCBkPSJtMjcuODU5NCA4Ljk3NTgyLjMyMDYtMi4wMzA1NGgtMS45MTc3di0xLjI4MjQ0YzAtLjUzNDM1LjMyMDYtMS4wNjg3IDEuMTc1Ni0xLjA2ODdoLjg2MnYtMS43MDk5M3MtLjg2NzktLjEwNjg3LTEuNzIyOS0uMTA2ODdjLTEuNDk2MiAwLTIuNTY0OS45NjE4NC0yLjU2NDkgMi42NzE3NnYxLjQ5NjE4aC0xLjgxNjh2Mi4wMzA1NGgxLjgxNjh2NC45MTU5OGMuMzM5MS4wNDgyLjc0ODEuMTA2OSAxLjA2ODcuMTA2OXMuODE2LS4wMjM5IDEuMTc1Mi0uMTA2OXYtNC45MTU5OHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+'
              alt='95.5 % 5 star rating on Google and Facebook'
              className='fTsrMn'
            ></img>
            <p className='jYHNgx'>
              <img
                src='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjExIiB2aWV3Qm94PSIwIDAgMTIgMTEiIHdpZHRoPSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNS40NDE1Mi45MjcwNDljLjI5OTM1LS45MjEzMTA3NCAxLjYwMjc2LS45MjEzMDkwNyAxLjkwMjExLjAwMDAwMmwuNjIwNTUgMS45MDk4MjljLjEzMzg3LjQxMjAyLjUxNzgzLjY5MDk4Ljk1MTA1LjY5MDk4aDIuMDA4MDdjLjk2ODggMCAxLjM3MTUgMS4yMzk2Mi41ODc4IDEuODA5MDJsLTEuNjI0NTcgMS4xODAzNGMtLjM1MDQ4LjI1NDY1LS40OTcxNC43MDYwMS0uMzYzMjcgMS4xMTgwM2wuNjIwNTQgMS45MDk4M2MuMjk5NC45MjEzMi0uNzU1MTMgMS42ODc0Mi0xLjUzODg0IDEuMTE4MDJsLTEuNjI0Ni0xLjE4MDMyYy0uMzUwNDgtLjI1NDY1LS44MjUwOC0uMjU0NjQtMS4xNzU1NyAwbC0xLjYyNDYgMS4xODAzMmMtLjc4MzcxLjU2OTQtMS44MzgxOS0uMTk2Ny0xLjUzODg0LTEuMTE4MDJsLjYyMDU0LTEuOTA5ODJjLjEzMzg4LS40MTIwMy0uMDEyNzgtLjg2MzQtLjM2MzI3LTEuMTE4MDRsLTEuNjI0Ni0xLjE4MDM0Yy0uNzgzNzExLS41Njk0LS4zODA5MzQtMS44MDkwMi41ODc3OS0xLjgwOTAyaDIuMDA4MTFjLjQzMzIzIDAgLjgxNzE5LS4yNzg5Ni45NTEwNi0uNjkwOTh6IiBmaWxsPSIjZmZhNTJmIi8+PC9zdmc+'
                className='fTsrMn'
              ></img>
              Ratings
            </p>
          </div>
        </div>
        <div className="License__rating">
           <div> <img height="100%" width="100%" src={link}/></div>
            <div>
              <img width="100%" height="100%" src={link1}/>
            </div>
            <div>
              <img  width="100%"height="100%" src={link2}/>
            </div>
        </div>
        <div className="ratings__1" >
        <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgODcgMTYiIHdpZHRoPSI4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmY5MTAwIj48cGF0aCBkPSJtNi44NTcxNyAxLjczMTM1Yy4zNzE5OC0uNzI0MDQgMS40MDY5OS0uNzI0MDQgMS43Nzg5NyAwbDEuMjEwOTIgMi4zNTcwNGMuMTQ1MjEuMjgyNjMuNDE2MDQuNDc5NDMuNzI5NzQuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTE0LTEuMTk1MmMtLjI4MzU5LS4xNDMzLS42MTg0Mi0uMTQzMy0uOTAyMDEgMGwtMi4zNjUwOSAxLjE5NTJjLS43MjY1Mi4zNjcxLTEuNTYzODYtLjI0MTMtMS40MzkyMi0xLjA0NTdsLjQwNTc3LTIuNjE4NjRjLjA0ODY2LS4zMTQtLjA1NDgxLS42MzI0My0uMjc4NzMtLjg1Nzg2bC0xLjg2NzQ4LTEuODgwMDNjLS41NzM2Ni0uNTc3NTEtLjI1MzgyLTEuNTYxODYuNTQ5NzMtMS42OTE4OWwyLjYxNTg3LS40MjMzYy4zMTM2Ny0uMDUwNzYuNTg0NTQtLjI0NzU2LjcyOTc0LS41MzAxOXoiLz48cGF0aCBkPSJtMjQuNzM0MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3OSAwbDEuMjEwOSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNjEuNDc5NDMuNzI5OC41MzAxOWwyLjYxNTkuNDIzM2MuODAzNS4xMzAwMyAxLjEyMzMgMS4xMTQzOC41NDk3IDEuNjkxODlsLTEuODY3NSAxLjg4MDAzYy0uMjIzOS4yMjU0My0uMzI3NC41NDM4Ni0uMjc4Ny44NTc4NmwuNDA1NyAyLjYxODY0Yy4xMjQ3LjgwNDQtLjcxMjcgMS40MTI4LTEuNDM5MiAxLjA0NTdsLTIuMzY1MS0xLjE5NTJjLS4yODM2LS4xNDMzLS42MTg0LS4xNDMzLS45MDIgMGwtMi4zNjUxIDEuMTk1MmMtLjcyNjUuMzY3MS0xLjU2MzgtLjI0MTMtMS40MzkyLTEuMDQ1N2wuNDA1OC0yLjYxODY0Yy4wNDg2LS4zMTQtLjA1NDgtLjYzMjQzLS4yNzg3LS44NTc4NmwtMS44Njc1LTEuODgwMDNjLS41NzM3LS41Nzc1MS0uMjUzOC0xLjU2MTg2LjU0OTctMS42OTE4OWwyLjYxNTktLjQyMzNjLjMxMzYtLjA1MDc2LjU4NDUtLjI0NzU2LjcyOTctLjUzMDE5eiIvPjxwYXRoIGQ9Im00Mi42MTEyIDEuNzMxMzVjLjM3Mi0uNzI0MDQgMS40MDctLjcyNDA0IDEuNzc5IDBsMS4yMTA5IDIuMzU3MDRjLjE0NTIuMjgyNjMuNDE2MS40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM2LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc0IDEuODgwMDNjLS4yMjQuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODguODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk4LTEuNjkxODlsMi42MTU4LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48cGF0aCBkPSJtNjAuNDg3MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3ODkgMGwxLjIxMSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNi40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM1LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc1IDEuODgwMDNjLS4yMjM5LjIyNTQzLS4zMjc0LjU0Mzg2LS4yNzg3Ljg1Nzg2bC40MDU4IDIuNjE4NjRjLjEyNDYuODA0NC0uNzEyNyAxLjQxMjgtMS40MzkyIDEuMDQ1N2wtMi4zNjUxLTEuMTk1MmMtLjI4MzYtLjE0MzMtLjYxODUtLjE0MzMtLjkwMiAwbC0yLjM2NTEgMS4xOTUyYy0uNzI2Ni4zNjcxLTEuNTYzOS0uMjQxMy0xLjQzOTMtMS4wNDU3bC40MDU4LTIuNjE4NjRjLjA0ODctLjMxNC0uMDU0OC0uNjMyNDMtLjI3ODctLjg1Nzg2bC0xLjg2NzUtMS44ODAwM2MtLjU3MzctLjU3NzUxLS4yNTM4LTEuNTYxODYuNTQ5Ny0xLjY5MTg5bDIuNjE1OS0uNDIzM2MuMzEzNy0uMDUwNzYuNTg0NS0uMjQ3NTYuNzI5Ny0uNTMwMTl6Ii8+PHBhdGggZD0ibTc4LjM2MzkgMS43MzEzNWMuMzcyLS43MjQwNCAxLjQwNy0uNzI0MDQgMS43Nzg5IDBsMS4yMTEgMi4zNTcwNGMuMTQ1Mi4yODI2My40MTYxLjQ3OTQzLjcyOTcuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzMuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk3LTEuNjkxODlsMi42MTU5LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48L2c+PC9zdmc+"/>
               <div className="rate__2">Go for ACKO  General Insurance if you want a 'WOW'! Settlement of your claims.</div> 
               <div ><img style={{borderRadius:"50%",marginTop:"7%"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAB2lBMVEXK4u8EIcYEKdXB3vHK5/nI4e6+3O7E4fPJ5fgEJtEEM+PG4vYDOujI4/AEJ8zF4vTG4/XL5PHP6/rF4O4ELNkEHbkDGacEMt7N6PoEI8kEGau/3OnD3eppaFu72+4ELt0EQO4EQusERvEET/gEWvwEF6BucGgDE4xCXWKv0OgESvQDGbADD3QEEoMEIcHd8vgMPNnh9v3W8f2CnasRGSINDxMEG7PT4+Ke2/sEJr1gYVhJdIAEF5hxbl23nI+ngXW92OnN6PUEZPwEOuAEDWqu2vkGWvd6emgJG38SSJQ9TJGPfWQ1fp++pZrKpJOb0PG54PtZbYTO3dN4j59TZnMEa/4FefsXJXhbRTKJpbtYcsMDClXX7PKIhG8OLJEYYZp6x/h7dF04S4daZXYnIiGzi2IZSb/nyLQGNcE6cIgrPk8pL0karPMxSFkFjuRraI++ooOKrM6HbExuW1Rce5U6ofdqqMMTTMxVrPeh1OCsxtc0R06SqLgFMNR1j9B5k48FFpIsW6KdelA/LSKbscDMzdIvVK5+tM6Owdq0wb6yx9UuQYjD6f4LT9JmqPU5Ul02an2ti29hzv0Na7AIeMk3dZIIbNe45/4yK0clZdBkUEkxKynavqWAYUN8zk0RAAACI0lEQVQozy3N9XvaQBjA8UuKJCEkQEJCUigUCDBchg73QqnbU1tdVlvb+datc3e3/3UXxvene+/z3HsgBHrpSzeU/09KBujNZqDsjXp96TajlGMYxmzu74cCSVbtHc/dqRgjp+wKo49olVotTU/GL8LG1Wp1X0ivgqKWo2kdPRV/vBGPT0JQwYpFWUoGHSz2aHt7cy4G5xC0gQGgwTCDCYM9aec7hbl78gpVVxQwU0ShwF7l8/nOx6c0HSp1FwKdDsMUJgWmKY4UCiNXGTjregLvDQa48LgN4fQYgzswdZ/8jwaeo9Hau62N018nv3/WopGxsdroi+fggtzo9Rln88ffk8295fqtVCr1ZuXDHnA1XK5r5bLTkW52/hwFuPr0zMpi5PvwFZCxWFw3HQ6n1061jtzpQWd5uj6U+iRLzjV+Rtq8DoeXQnjS7qyHKzv7+8MHwJJzPQtm05C8FZK02wgq66MOD78egPbS0pZwzqHEoJydRMUsEvz2Zfc9yGTW05QkCRTKhnmex40BTkDeft71gNzqOoJkAxRFEHa7rYKIVTcV3Ll8yQMsljU8GPALFEGSVhY3iv5AEEdkWW20gqLfbcStRJgkILn9RgoZ6r55jSYWxARKEDYbSRmlqh/BBVkauTXUuOATUStPsiji49zVhBV/GHsAki9bKDLLcbiVDRNWwcdJTRHF7ycnQHJxHkeWJQlnz3ieFRKSe9bH4vPJiX8rUWmhE3qYOQAAAABJRU5ErkJggg==" width="30px"   /></div>
                <div style={{fontSize:"12px",fontWeight:"600", lineHeight:"24px"}}>Vikas Gupta</div>
                <div style={{fontSize:"12px"}}>Lucknow</div>
      </div>
      </div>
      
      <div className='left-image'>
        <img
          src='https://acko-home-prod.ackoassets.com/next_assets/6cfee294eb0ba0a61f1100811fda667701b09450/_next/static/images/homepage-banner-illustration-2-99577afed0f02e7ee1411f1e8aede6c9.svg'
          alt=''
          className='cOTRjA'
        ></img>
      </div>
    </div>
  );
};
