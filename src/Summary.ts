import { MatchData } from './MatchData';
import { HtmlReport } from './reportTargets/HtmlReport'
import { WinsAnalysis } from './analyzers/WinsAnalysis'

export interface Analayzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string, name: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(name))
  }

  constructor(public analyzer: Analayzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}
