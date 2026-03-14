import React, { useState } from 'react'
import styled from 'styled-components'
import { Token } from '../../types'
import { useBalance } from '../../hooks/useBalance'
import { TokenModal } from './TokenModal'
import { useWallet } from '../../hooks/useWallet'

interface Props {
  label: string
  token: Token | null
  onChange: (token: Token) => void
  error?: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral2};
  margin-bottom: 4px;
`

const InputContainer = styled.div<{ $error?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.backgroundModule};
  border: 1px solid ${({ theme, $error }) =>
    $error ? theme.colors.accentCritical : theme.colors.backgroundOutline};
  border-radius: 20px;
  transition: border-color ${({ theme }) => theme.transition.duration.fast} ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.accentCritical : theme.colors.neutral3};
    background: ${({ theme }) => theme.colors.backgroundInteractive};
  }
`

const TokenPlaceholder = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutral2};
  font-size: 20px;
`

const TokenInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`

const TokenLogo = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.backgroundInteractive};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral2};
  font-size: 16px;
`

const TokenDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const TokenSymbol = styled.span`
  color: ${({ theme }) => theme.colors.neutral1};
  font-size: 20px;
  font-weight: 500;
`

const TokenName = styled.span`
  color: ${({ theme }) => theme.colors.neutral2};
  font-size: 14px;
`

const TokenBalance = styled.div`
  color: ${({ theme }) => theme.colors.neutral2};
  font-size: 14px;
  margin-left: auto;
  text-align: right;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.accentCritical};
  font-size: 14px;
  margin-top: 4px;
`



export const TokenSelector: React.FC<Props> = ({ label, token, onChange, error }) => {
  const { balance } = useBalance(token?.address)
  const { chainId } = useWallet()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSelectToken = (selectedToken: Token) => {
    onChange(selectedToken)
  }

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer $error={!!error} onClick={handleOpenModal}>
        {token ? (
          <TokenInfo>
            {token.logoURI ? (
              <img 
                src={token.logoURI} 
                alt={token.symbol} 
                style={{ width: '36px', height: '36px', borderRadius: '18px' }} 
              />
            ) : (
              <TokenLogo>{token.symbol[0]}</TokenLogo>
            )}
            <TokenDetails>
              <TokenSymbol>{token.symbol}</TokenSymbol>
              <TokenName>{token.name}</TokenName>
            </TokenDetails>
            {balance && <TokenBalance>{parseFloat(balance).toLocaleString(undefined, { maximumFractionDigits: 4 })} {token.symbol}</TokenBalance>}
          </TokenInfo>
        ) : (
          <TokenPlaceholder>
            <TokenLogo>?</TokenLogo>
            Select token
          </TokenPlaceholder>
        )}
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <TokenModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSelectToken={handleSelectToken}
        chainId={chainId || 0}
      />
    </Container>
  )
}