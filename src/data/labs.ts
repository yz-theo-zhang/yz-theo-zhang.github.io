export type Lab = {
  id: string
  title: string
  description: string
  href?: string
}

export const githubUrl = 'https://github.com/yz-theo-zhang'

// Add a published URL to enable a lab's navigation and project link.
export const labs: Lab[] = [
  {
    id: 'economics-lab',
    title: 'Economics Lab',
    description: 'A forthcoming space for exploring economics through data and code.',
  },
  {
    id: 'finance-lab',
    title: 'Finance Lab',
    description: 'A forthcoming space for exploring markets, risk, and finance.',
  },
]
