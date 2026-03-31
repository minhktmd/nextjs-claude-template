// Centralized query key factory — never write inline string arrays in useQuery calls
// Usage: queryKeys.users.all, queryKeys.users.detail(id)

export const queryKeys = {
  // Example:
  // users: {
  //   all: ['users'] as const,
  //   lists: () => [...queryKeys.users.all, 'list'] as const,
  //   detail: (id: string) => [...queryKeys.users.all, 'detail', id] as const,
  // },
} as const
