import AddUser from "@/public/assets/quick actions/user-add.svg"
import CrownIcon from "@/public/assets/quick actions/crown.svg"
import CardIcon from "@/public/assets/quick actions/card.svg"
import MoneyIcon from "@/public/assets/quick actions/moneys.svg"
import DeleteUser from "@/public/assets/quick actions/profile-delete.svg"
import GlobalIcon from "@/public/assets/quick actions/global.svg"

export const Actions = [
  {
    title: 'Add New Members',
    icon: AddUser,
  },
  {
    title: 'Add New Dependent',
    icon: AddUser,
  },
  {
    title: 'Bulk Change Class',
    icon: CrownIcon,
  },
  {
    title: 'Bulk Change ID',
    icon: CardIcon,
  },
  {
    title: 'Bulk Change Risk',
    icon: MoneyIcon,
  },
  {
    title: 'Bulk Delete',
    icon: DeleteUser,
  },
  {
    title: 'Providers Network',
    icon: GlobalIcon,
  }
]
