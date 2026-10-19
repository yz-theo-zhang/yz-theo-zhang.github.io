export type Lab = {
  id: string
  title: string
  description: string
  href?: string
}

export const githubUrl = 'https://github.com/yz-theo-zhang'

export const economicsLabUrl = 'https://yz-theo-zhang.github.io/economics-lab/'


// Add a published URL to enable a lab's navigation and project link.
export const labs: Lab[] = [
  {
    id: 'economics-lab',
    title: 'Economics Lab',
    description: 'A space for exploring economics through data and code.',
    href: economicsLabUrl,
  },
  {
    id: 'finance-lab',
    title: 'Finance Lab',
    description: 'A forthcoming space for exploring markets, risk, and finance.',
  },
]
