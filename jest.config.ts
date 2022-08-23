import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
    preset: "ts-jest/presets/default-esm",
    testEnvironment: "node",
    verbose: true,
    automock: true,
}
export default config