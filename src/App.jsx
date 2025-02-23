import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { eftecLogo } from './assets/eftec_logo'
import TaskflowIMG from './assets/taskflow_img.png'

function App() {
  const [command, setCommand] = useState("")
  const [step, setStep] = useState(4)

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      switch (command) {
        case "help":
          setStep(0)
          break
        case "about":
          setStep(1)
          break
        case "projects":
          setStep(2)
          break
        case "contact":
          setStep(3)
          break
        case "designs":
          setStep(4)
          break
        case "":
          setStep(5)
          break
        default:
          setStep(6)
          break
      }
    }
  }

  function onStepChange() {
    switch (step) {
      case 0:
        return (
          <div className={"global_container"}>
            <h1>
              <mark className={"bullet"}>{">"}</mark>
              {" "}exec{" "}
              <mark>help</mark>
            </h1>
            <div className={"center_content"}>
              <h2>
                This is all commands available:
              </h2>
              <div className={"commands_container"}>
                <p
                  style={{
                    color:
                    command.length > 0
                      && "help".includes(command)
                      ? "white"
                      : "grey",
                  }}
                >
                  <mark>{"$"}</mark>
                  {" "} help
                </p>
                <p
                  style={{
                    color:
                    command.length > 0
                      && "about".includes(command)
                      ? "white"
                      : "grey"
                  }}
                >
                  <mark>{"$"}</mark>
                  {" "} about
                </p>
                <p
                  style={{
                    color:
                    command.length > 0
                      && "projects".includes(command)
                      ? "white"
                      : "grey"
                  }}
                >
                  <mark>{"$"}</mark>
                  {" "} projects
                </p>
                <p
                  style={{
                    color:
                    command.length > 0
                      && "contact".includes(command)
                      ? "white"
                      : "grey"
                  }}
                >
                  <mark>{"$"}</mark>
                  {" "} contact
                </p>
                <p
                  style={{
                    color:
                    command.length > 0
                      && "designs".includes(command)
                      ? "white"
                      : "grey"
                  }}
                >
                  <mark>{"$"}</mark>
                  {" "} designs
                </p>
              </div>
              <p style={{ fontStyle: "italic" }}>Write the command and type <mark>Enter</mark> to see.</p>
            </div>
          </div>
        )
      case 1:
        return (
          <div className={"global_container"}>
            <h1>
              <mark className={"bullet"}>{">"}</mark>
              {" "}exec{" "}
              <mark>about</mark>
            </h1>
            <div className={"center_content"}>
              <div className={"center_container"}>
                <h2>
                  user
                  <mark>@portfolio:~${" "}</mark>
                  cat
                  <mark className={"bullet"}>{" "}./career.txt</mark>
                </h2>
                <p>
                  I started in software development in 2020 as Front-End developer.
                  In mid-2021, I started developing Full-Stack application, from the Requirements Documents
                  to putting them into production. My last project was internal for the company
                  <mark>{" "}@JMCálculos{" "}</mark><strong>(Brazil)</strong>.
                  <p
                    style={{
                      marginLeft: 0,
                      fontStyle: "italic",
                      marginTop: "1.2rem",
                      color: "lightgrey"
                    }}
                  >
                   If you want to see, type <mark>projects</mark> to see more.
                  </p>
                </p>
                <h2>
                  user
                  <mark>@portfolio:~${" "}</mark>
                  cat
                  <mark className={"bullet"}>{" "}./freetime.txt</mark>
                </h2>
                <p>
                  I like games, music and especially investing in knowledge.
                  This year, I stated my journey in open-souce contributions in
                  small communities. I made contribution to
                  <a href="https://agendalize.app" target="_blank" style={{ color: "#EF3340" }}><mark>{" "}@agendalize.app</mark></a> and <mark>@thebooksclub{" "}</mark>
                  for the community of <mark>@Deividy Metheler Zachetti</mark>
                  <a href="https://umpordez.com" target="_blank" style={{ color: "white" }}><strong>{" "}(@umpordez)</strong></a>. Another hobbie
                  I like to do is concept designs for applications.<br/>
                  <p style={{ marginLeft: 0, fontStyle: "italic", marginTop: "1.2rem", color: "lightgrey" }}>
                    If you want to see, type <mark>designs</mark> to see more.
                  </p>
                </p>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className={"global_container"}>
            <h1>
              <mark className={"bullet"}>{">"}</mark>
              {" "}exec{" "}
              <mark>projects</mark>
            </h1>
            <div className={"center_content"}>
              <div className={"center_container"}>
                <h2>
                  user
                  <mark>@portfolio:~${" "}</mark>
                  ls
                  <mark className={"bullet"}>{" "}projects</mark>
                </h2>
                <div>
                  <div>
                    <p>/taskflow</p>
                    <div style={{ marginLeft: "4.8rem" }}>
                      <p><strong>Project Name:</strong> Taskflow</p>
                      <p><strong>Tech Stack:</strong> ReactJS, Firebase and NodeJS</p>
                      <p><strong>Description:</strong> Lorem Ipsum</p>
                      <p><strong>Live Demo:</strong> <mark>[Internal Project]</mark></p>
                      <p><strong>Repo:</strong> <mark>[Internal Project]</mark></p>
                      <p><strong>Sreenshot:</strong> ./screenshot.png</p>
                    </div>
                  </div>
                  <p>/nexus</p>
                  <p>/mytaskboard</p>
                  <p>/notecode</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div>
            <h1>
              <mark className={"bullet"}>{">"}</mark>
              {" "}exec{" "}
              <mark>contact</mark>
            </h1>
          </div>
        )
      case 4:
        return (
          <div className={"global_container"}>
            <h1>
              <mark className={"bullet"}>{">"}</mark>
              {" "}exec{" "}
              <mark>designs</mark>
            </h1>
          </div>
        )
      case 5:
        return (
          <div className={"global_container"}>
            <h1>
              <mark className={"bullet"}>{">"}</mark>
              {" "}Welcome,{" "}
              <mark>@user</mark>
              !
            </h1>
            <div className={"center_content"}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2.4rem" }}>
                  <h2 style={{ fontSize: "5.8rem", fontFamily: "Unbounded, sans-serif", fontWeight: "400" }}>EF</h2>
                  <pre style={{ fontFamily: "monospace", whiteSpace: "pre-wrap", color: "#EF3340", fontSize: ".3rem"}}>
                    {eftecLogo}
                  </pre>
                  <h2 style={{ fontSize: "5.8rem", fontFamily: "Unbounded, sans-serif", fontWeight: "400" }}>TEC</h2>
                </div>
              <h3 style={{ marginTop: "2.4rem", fontSize: "3.6rem", color: "grey" }}>Turning ideas into code.</h3>
              <p style={{ marginTop: "2.4rem", fontStyle: "italic" }}>Type <mark>help</mark> to see options.</p>
            </div>
          </div>
        )
      case 6:
        return (
          <div className={"global_container"}>
            <h1>
              <mark className={"bullet"}>{">"}</mark>
              bash: command not found!
            </h1>
            <div className={"center_content"}>
              <p style={{ marginTop: "2.4rem", fontStyle: "italic" }}>Type <mark>help</mark> to see options.</p>
            </div>
          </div>
        )
    }
  }
  return (
    <>
      <section className={"terminal"}>
        { onStepChange() }

        <div className={"input_container"}>
          <span style={{ color: "#EF3340", fontWeight: "600" }}>${" "}</span>
          <input
            type="text"
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={"Type here..."}
            autoFocus
          />
        </div>
      </section>
    </>
  )
}

export default App
