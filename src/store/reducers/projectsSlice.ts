import { createSelector, createSlice } from '@reduxjs/toolkit'
import { ProjectInfoOutput } from '~/services/project'
import { RootState } from '../store'

export interface ProjectState {
  projects: ProjectInfoOutput[] | []
  projectsAdmin: ProjectInfoOutput[] | []
  projectsMember: ProjectInfoOutput[] | []
}

const initialState: ProjectState = {
  projects: [],
  projectsAdmin: [],
  projectsMember: []
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = [...action.payload]
    },
    setProjectsAdmin: (state, action) => {
      state.projectsAdmin = [...action.payload]
    },
    setProjectsMember: (state, action) => {
      state.projectsMember = [...action.payload]
    },
    addNewProject: (state, action) => {
      state.projects = [action.payload, ...state.projects]
      state.projectsAdmin = [action.payload, ...state.projectsAdmin]
    }
  }
})

export const { setProjects, setProjectsAdmin, setProjectsMember, addNewProject } = projectSlice.actions

export const selectProjects = (state: RootState) => state.projectReducer.projects
export const selectProjectsAdmin = (state: RootState) => state.projectReducer.projectsAdmin
export const selectProjectsMember = (state: RootState) => state.projectReducer.projectsMember

// export const selectAllProject = (state: RootState) => {
//   state.projectReducer.projects, state.projectReducer.projectsAdmin, state.projectReducer.projectsMember
// }

export const selectAllProject = createSelector(
  [selectProjects, selectProjectsAdmin, selectProjectsMember],
  (projects, projectsAdmin, projectsMember) => {
    // Combine the data as needed
    return {
      projects,
      projectsAdmin,
      projectsMember
    }
  }
)
export default projectSlice.reducer
