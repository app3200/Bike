import { useState } from "react";
import "./hero.css";
import { HomeSearch } from "./HomeSearch";

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
  console.log(isBikeClicked);
  console.log(isCarClicked);
  console.log(isHealthClicked);
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
          <div className='NChTW'>
            <div className='kdQsEA'>
              <div className='gHvwWd hover-cntr'>
                <div onClick={handleCar}>
                  <div className='hYLHSQ'>
                    <div className='hBzqTn'>
                      <img
                        src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgZmlsbD0iIzdjNDdlMSI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii0xNi45MzUiLz48cGF0aCBkPSJNMzIuMDg2IDE3LjE0N2MtMi4wNDMtLjcwNC0yLjc1My0uODQ5LTUuMzUzLTEuMjg1LS41MDMtLjA4OS0uOTgzLS4yNzktMS4zMTEtLjY3bC00LjA5Ny00LjAyMmMtLjUyNC0uNTE0LTEuMjAyLS44MzgtMS45MzQtLjkxNmEzOS43OCAzOS43OCAwIDAgMC04LjU1NS0uMDQ1Yy0uOTcyLjEwMS0xLjg1Ny42MTQtMi40MjUgMS40MTlsLTIuMjQgMy4xODRhLjc2Ljc2IDAgMCAxLS40NDguMzEzbC0xLjM1NS4zNDZjLS44NDEuMjIzLTEuNDA5IDEuMDE3LTEuMzY2IDEuODg4bC4yMjkgNC4zNDZjLjA1NS45ODMuODQxIDEuNzQzIDEuODAzIDEuNzQzaC42ODh2LS4wMjJjMC0yLjUxNCAxLjk4OC00LjU0OCA0LjQ0Ny00LjU0OHM0LjQ0NyAyLjAzNCA0LjQ0NyA0LjU0OHYuMDIyaDguMDQxdi0uMDIyYzAtMi41MTQgMS45ODgtNC41NDggNC40NDctNC41NDhzNC40NDcgMi4wMzQgNC40NDcgNC41NDh2LjAyMmguNTc5Yy41NzkgMCAxLjA4Mi0uNDM2IDEuMTY5LTEuMDE3bC4zMTctMi44NDljLjEwOS0xLjA3My0uNTI0LTIuMTAxLTEuNTI5LTIuNDM2ek0xMi45NDUgMTUuMjdsLTMuNzgtLjA1NmMtLjMzOSAwLS41NzktLjM1Ny0uNDQ4LS42ODJsLjc2NS0xLjk3OGMuMTk3LS41MDMuNjQ1LS44NDkgMS4xNjktLjg5NGwyLjI5NC0uMTM0djMuNzQzem04Ljk4MS4xMjNsLTcuMzQyLS4xMDF2LTMuODFsNC4zNTkuMTc5YTEuMzEgMS4zMSAwIDAgMSAuODQxLjQyNWwyLjQwNCAyLjcwNGMuMjA4LjIzNS4wNDQuNjAzLS4yNjIuNjAzeiIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0yNy4xMDUgMjAuMTYzYy0xLjc3IDAtMy4yMDEgMS40NjQtMy4yMDEgMy4yNzRzMS40MzEgMy4yNzQgMy4yMDEgMy4yNzQgMy4yMDEtMS40NjQgMy4yMDEtMy4yNzQtMS40MzEtMy4yNzQtMy4yMDEtMy4yNzR6Ii8+PC9kZWZzPjwvc3ZnPg=='
                        alt='car icon'
                        className='jsx-2639780352 hover-opaciity'
                        style={{ width: "36px", height: "36px" }}
                      ></img>
                    </div>
                  </div>
                  <div className='hRvsJU'>Car & taxi</div>
                </div>
              </div>
              <div className='cecEko hover-cntr'>
                <div onClick={handleBike}>
                  <div className='hYLHSQ'>
                    <div className='dgfTQq'>
                      <img
                        src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg=='
                        alt='car icon'
                        className='jsx-2639780352 hover-opacity'
                        style={{ width: "36px", height: "36px" }}
                      ></img>
                    </div>
                  </div>
                  <div className='hRvsJU hover-opacity'>Bike</div>
                </div>
              </div>{" "}
              <div className='cecEko hover-cntr'>
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
          <HomeSearch></HomeSearch>
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
