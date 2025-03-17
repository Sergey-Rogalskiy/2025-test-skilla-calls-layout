# Test assignment to Skilla

[Link to Skilla website](https://skilla.ru/)
[Link to vacanncy](https://spb.hh.ru/vacancy/115111805)
[Link to requirements and layout in Figma](https://www.figma.com/design/yfFIzjZSTuLBR3FROcS26a/TZ-FRONT-2024?node-id=1-792&t=epdFc6wT6TSCVRrH-0)
[Link to Skilla API](https://api.skilla.ru/testapi)

## Demo

[Link to deployed demo on Vercel](https://2025-test-skilla-calls-layout.vercel.app/)

## Release notes & Issues

| <span style="color:green">Positive</span>         | <span style="color:red">Negative</span>                                                                                                                       |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Layout on React is implemented (list of calls)    | Added extra pagination for testing instead of virtualized list that was meant                                                                                 |
| API integration is implemented (only "/getCalls") | - Audio playing is not implemented since got the same "record" id that were not able to get from "/"                                                          |
| Configured .env                                   | Not from the first commit :(                                                                                                                                  |
| Implemented state using zustand                   |                                                                                                                                                               |
| Filtration by type                                |                                                                                                                                                               |
| Filtration by time                                | The "date picker" only for preconfigured values. Custom date selection is not implemented                                                                     |
| Sort by date and duration fields                  | By date is not working - maybe because of wrong field                                                                                                         |
| "Mark" field was implemented on UI side           | It rerenders each onClick event                                                                                                                               |
|                                                   | Didn't handle long values in table                                                                                                                            |
|                                                   | Mapping of API fields to table headers is placed in "./src/cofiguration/config.tsx". It was not 100% clear, I had to clarify this mapping before implementing |
|                                                   | Didn't handle pagination issues since it was not required according to layout                                                                                 |
|                                                   | Left one //@ts-ignore                                                                                                                                         |

## How to run locally

> `git clone {repo}` > `cd {repo name}` > `yarn install` > `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
