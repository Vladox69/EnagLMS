import { ModuleModel } from '@/models'
import React, { FC, useEffect, useState } from 'react'
import { ItemAModule } from './ItemAModule'

interface Props {
  modules: ModuleModel[],
}

export const ListAModule: FC<Props> = ({ modules: ms }) => {

  const [modules, setModules] = useState<ModuleModel[]>([])

  useEffect(() => {
    setModules(ms)
  }, [ms])

  const onDeleteModule = (module: ModuleModel) => {
    setModules(modules => modules.filter(m => m.id !== module.id))
  }

  const onUpdateModule = (module: ModuleModel) => {
    setModules(modules => modules.map(m => (m.id == module.id) ? module : m))
  }

  return (
    <>
      {
        modules.map((module) => (
          <ItemAModule
            key={module.id}
            module={module}
            onUpdateModule={onUpdateModule}
            onDelteModule={onDeleteModule} />
        ))
      }
    </>
  )
}
