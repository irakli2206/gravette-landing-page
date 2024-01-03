
type Props = {
  version: string
  date: string
  improvements?: string[]
  bugfixes?: string[]
}

const ChangelogCard = ({ version, date, improvements, bugfixes }: Props) => {
  return (
    <div className="relative z-20 rounded-3xl ring-1 ring-gray-500/20  bg-gradient-to-b from-indigo-950/20 to-indigo-950/70 backdrop-blur-xl backdrop-brightness md:min-w-[500px] overflow-hidden">
      <div className="relative z-10">
        <div className="px-10 py-7 text-xl font-medium  ">{version}</div>
        {(improvements || bugfixes) && <div className="h-[1px] w-full bg-gray-500/20 "></div>}

        {improvements && <div className="px-10 pt-8 pb-8" >
          <h1 className="font-medium pb-2">Improvements & Changes</h1>
          <ul className="list-disc ">
            {improvements.map(improvement => <li className="font-light text-sm ml-8 text-gray-200">{improvement}</li>)}
          </ul>
        </div>}

        {bugfixes && <div className="px-10 pb-8">
          <h1 className="font-medium pb-2">Bugfixes</h1>
          <ul className="list-disc ">
            {bugfixes.map(bugfix => <li className="font-light text-sm ml-8 text-gray-200">{bugfix}</li>)}
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default ChangelogCard