import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

export function ToggleSwitch() {

  const { handleThemeChange, dataTheme } = useTheme()
  let currentTheme = dataTheme === 'dark'
  const [enabled, setEnabled] = useState(currentTheme)

  useEffect(() => {
    handleThemeChange(enabled)
  }, [enabled, setEnabled])

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">{enabled ? "Light" : "Dark"} mode</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-button-dark-background' : 'bg-dark-text'
            } relative inline-flex h-6 w-11 items-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-button-dark-background focus:ring-offset-2 dark:focus:ring-offset-dark-background`}
        >
          <span
            className={`${enabled ? 'translate-x-6 ' : 'translate-x-1 '
              } inline-block h-4 w-4 transform rounded-full  transition duration-200 bg-white
            }`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}