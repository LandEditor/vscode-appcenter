"use strict";

import { Disposable, workspace } from "vscode";
import { VsCodeUtils } from "./helpers/vsCodeUtils";
import { AppCenterCommandHandler } from "./appCenterCommandHandler";
import { ILogger } from "./log/logHelper";
import { ConsoleLogger } from "./log/consoleLogger";

export class ExtensionManager implements Disposable {
    private _appCenterCommandHandler: AppCenterCommandHandler;
    private _logger: ILogger;

    public get AppCenterCommandHandler(): AppCenterCommandHandler {
        return this._appCenterCommandHandler;
    }

    public async Initialize(logger: ILogger = new ConsoleLogger()): Promise<void> {
        this._logger = logger;
        await this.initializeExtension();
    }

    public RunCommand(funcToTry: (args) => void, ...args: string[]): void {
        funcToTry(args);
    }

    public DisplayErrorMessage(message?: string): boolean {
        const msg: string = message ? message : "An error occured";
        if (msg) {
            VsCodeUtils.ShowErrorMessage(msg);
            return true;
        }
        return false;
    }

    public DisplayWarningMessage(message: string): void {
        VsCodeUtils.ShowWarningMessage(message);
    }

    public DisplayInfoMessage(message: string): void {
        VsCodeUtils.ShowInfoMessage(message);
    }

    public async dispose(): Promise<void>  {
        this.cleanup();
    }

    private async initializeExtension(): Promise<void> {
        this._appCenterCommandHandler = new AppCenterCommandHandler(this);
    }

    private cleanup(preserveTeamExtension: boolean = false): void {
    }
}