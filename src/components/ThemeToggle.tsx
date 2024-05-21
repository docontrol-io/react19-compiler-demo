import {useLocalStorageState} from 'ahooks'
import React from 'react'
import {Button} from '@lemonsqueezy/wedges'
import {MoonIcon, SunIcon} from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorageState<string | undefined>(
    'kadabra-theme',
    {
      defaultValue: 'dark'
    }
  )

  React.useEffect(() => {
    if (theme === 'dark') {
      document.getElementsByTagName('html')[0].classList.remove('light')
      document.getElementsByTagName('html')[0].classList.add('dark')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
      document.getElementsByTagName('html')[0].classList.add('light')
    }
  }, [theme])

  const handleClick = () => {
    const className = document.getElementsByTagName('html')[0].className
    if (className === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <Button
      before={
        theme === 'dark' ? (
          <SunIcon stroke={'#facc15'} size={14} />
        ) : (
          <MoonIcon size={14} />
        )
      }
      variant="transparent"
      shape="pill"
      size="xs-icon"
      onClick={handleClick}
    />
  )
}
