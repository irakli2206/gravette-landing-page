import { motion } from "framer-motion"

type Props = {
  version: string
  date: string
  improvements?: string[]
  bugfixes?: string[]
}

const ChangelogCard = ({ version, date, improvements, bugfixes }: Props) => {
  return (

    <motion.div
      key={date}
      initial={{
        opacity: 0,
        x: -30
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      transition={{
        bounce: 0
      }}
      viewport={{ once: true }}
      className="relative z-50 rounded-3xl ring-1 ring-gray-500/20  bg-gradient-to-b from-indigo-950/20 to-indigo-950/70  md:min-w-[500px] overflow-hidden" >
      <div className="relative z-10">
        <div className="px-10 py-7 text-xl font-medium  ">{version}</div>
        {(improvements || bugfixes) && <div className="h-[1px] w-full bg-gray-500/20 "></div>}

        {improvements && <div className="px-10 pt-8 pb-8 " >
          <h1 className="font-medium pb-2">Improvements & Changes</h1>
          <ul className="list-disc flex flex-col gap-2">
            {improvements.map((improvement, i) => <li key={i} className="font-light text-sm ml-8 text-gray-200">{improvement}</li>)}
          </ul>
        </div>}

        {bugfixes && <div className="px-10 pb-8">
          <h1 className="font-medium pb-2">Bugfixes</h1>
          <ul className="list-disc flex flex-col gap-2">
            {bugfixes.map((bugfix, i) => <li key={i} className="font-light text-sm ml-8 text-gray-200">{bugfix}</li>)}
          </ul>
        </div>}
      </div>
    </motion.div>
  )
}

export default ChangelogCard