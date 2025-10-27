import React, {PropsWithChildren, ReactNode} from 'react'
import { TextField, Button, Callout , Text } from "@radix-ui/themes";



const ErrorMessage = ({children}: PropsWithChildren) => {
    if (!children) return null;
  return (
    <div>
        <Text  color='red' as='p'>
            {children}
        </Text>
    </div>
  )
}

export default ErrorMessage