import { Terminal as ITerminalApi } from 'xterm'

export class Terminal implements ITerminalApi {
  public get cols(): number {
    return 10
  }

  constructor(options?: any) {
    console.log('zzn options12333:', options)
  }
}
