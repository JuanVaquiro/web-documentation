import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import ListTabs from "../components/ListTabs";

function LionCommand() {
  const [items, setItems] = useState([
    {
      event: "getting-started",
      name: "Getting started",
    },
    {
      event: "list-command",
      name: "List command",
    },
    {
      event: "credits-license",
      name: "Credits and license",
    },
  ]);

  const [panes, setPanes] = useState([
    {
      event: "getting-started",
      content: (
        <>
          <div className="mb-4">
            <h2 className="pb-2">Lion-Command</h2>

            <p>
              Library created with the function of executing commands from PHP
            </p>
          </div>

          <div className="mb-3">
            <h3 className="pb-2">Install</h3>

            <CodeBlock
              language="powershell"
              content={"composer require lion-framework/lion-command"}
            />
          </div>

          <div className="mb-3">
            <h3 className="pb-2">Usage</h3>

            <CodeBlock
              language="php"
              content={
                "<?php\n" +
                "//lion file\n\n" +
                'require_once("vendor/autoload.php");\n\n' +
                "LionCommand\\SystemCommand::init([\n" +
                "\tLionCommand\\Command\\ControllerCommand::class,\n" +
                "\tLionCommand\\Command\\ModelCommand::class,\n" +
                "\tLionCommand\\Command\\MiddlewareCommand::class,\n" +
                "\tLionCommand\\Command\\CommandsCommand::class,\n" +
                "\tLionCommand\\Command\\CapsuleCommand::class,\n" +
                "\tLionCommand\\Command\\TestCommand::class,\n" +
                "\tLionCommand\\Command\\ServerCommand::class,\n" +
                "\tLionCommand\\Command\\RunTestCommand::class,\n" +
                "\tLionCommand\\Command\\RulesCommand::class\n" +
                "]);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "list-command",
      content: (
        <>
          <div className="mb-3">
            <h3 className="pb-2">Available commands</h3>

            <CodeBlock
              language="powershell"
              content={
                "php lion serve\n" +
                "php lion new:controller name_controller\n" +
                "php lion new:model name_model\n" +
                "php lion new:middleware name_middleware\n" +
                "php lion new:command name_command\n" +
                "php lion new:capsule name_capsule\n" +
                "php lion new:test name_test\n" +
                "php lion test\n" +
                "php lion new:rule name_rule\n"
              }
            />
          </div>

          <div className="mb-3">
            <h3 className="pb-2">Optional</h3>

            <CodeBlock
              language="powershell"
              content={"php lion serve --port=4041"}
            />

            <p>
              To create custom commands the following must be executed, For more
              information on creating custom commands read on Symfony-Console.
            </p>

            <CodeBlock
              language="powershell"
              content={"php lion new:command name_command"}
            />
          </div>
        </>
      ),
    },
    {
      event: "credits-license",
      content: (
        <>
          <div className="mb-3">
            <h3 className="pb-2">Credits</h3>

            <a
              href="https://github.com/symfony/console"
              target="_blank"
            >
              Symfony-Console
            </a>
          </div>

          <div className="mb-3">
            <h3 className="pb-2">License</h3>
            <p>
              Copyright © 2022{" "}
              <a
                href="https://github.com/Sleon4/Lion-Framework/blob/main/LICENSE"
                target="_blank"
              >
                MIT License
              </a>
            </p>
          </div>
        </>
      ),
    },
  ]);

  return <ListTabs default="getting-started" items={items} panes={panes} />;
}

export default LionCommand;
