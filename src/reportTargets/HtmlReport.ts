import fs from 'fs'
import { OutputTarget } from '../Summary'

export class HtmlReport implements OutputTarget {
  constructor(public name: string) {}
  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <p>${report}</p>
    </div>
    `
    fs.writeFileSync(`${this.name}.html`, html);
  }
}