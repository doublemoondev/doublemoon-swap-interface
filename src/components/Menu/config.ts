import { MenuEntry, menuStatus } from '@doublemoondev/doublemoon-uikit'

const config: MenuEntry[] = [
  {
    label: "Buy DBM",
    icon: "TradeIcon",
    href: "/swap",
  },
  {
    label: "Moon Lucky",
    icon: "TicketIcon",
    href: "https://app.doublemoon.finance/moon-lucky",
  },
  {
    label: "Moon Farms",
    icon: "FarmIcon",
    href: "https://app.doublemoon.finance/farms",
  },
  {
    label: "Moon Solo",
    icon: 'SoloIcon',
    href: 'https://app.doublemoon.finance/pools',
  },
  {
    label: "Moon Vaults",
    icon: 'VaultIcon',
    href: '/vaults',
    status: menuStatus.NEW,
  },
  {
    label: "Moon Referral",
    icon: "ReferralIcon",
    href: "https://app.doublemoon.finance/referral",
  },
  {
    label: "Charts",
    icon: "ChartIcon",
    items: [
      {
        label: "DBM",
        href: "https://dex.guru/token/0x0314e5a39806c30d67b869ee1bcdabee7e08de74-bsc",
      },
      {
        label: "DMC",
        href: "https://dex.guru/token/0xa7bd090bc58e663388be63d5e8a7b683f5a3d4fc-bsc",
      },
    ],
  },
  {
    label: "Document",
    icon: "DocumentIcon",
    href: "https://whitepaper.doublemoon.finance/",
  },
]

export default config
