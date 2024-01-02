import { WorkCardContainer } from './styles'
import { POPPINS_400, POPPINS_700 } from '@/pages'

export default function WorkCard() {
  return (
    <WorkCardContainer>
      <h1 className={POPPINS_700.className}>Mobilize Financial Services</h1>
      <p className={POPPINS_400.className}>Managment Control Intern</p>
      <span className={POPPINS_400.className}>April 2023 - Present</span>
      <ul>
        <li className={POPPINS_400.className}>
          Assistance in the database and consolidation of the financial database
        </li>
        <li className={POPPINS_400.className}>
          Dashboard development to facilitate data visualization
        </li>
      </ul>
    </WorkCardContainer>
  )
}
