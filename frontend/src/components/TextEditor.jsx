"use client"

import React, { useCallback, useRef, useState, useEffect } from 'react'
import { 
  Bold, Italic, Underline, List, ListOrdered, AlignJustify, 
  AlignLeft, AlignCenter, AlignRight, Link, Image, Palette, Type
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EditorDeTexto() {
  const editorRef = useRef(null)
  const [corAtual, setCorAtual] = useState('#000000')
  const [tamanhoFonte, setTamanhoFonte] = useState('16px')
  const [tipoFonte, setTipoFonte] = useState('Arial')

  const aplicarEstilo = useCallback((comando, valor = null) => {
    document.execCommand(comando, false, valor)
    editorRef.current.focus()
  }, [])

  const inserirLink = useCallback(() => {
    const url = prompt('Digite a URL do link:')
    if (url) {
      aplicarEstilo('createLink', url)
    }
  }, [aplicarEstilo])

  const inserirImagem = useCallback(() => {
    const url = prompt('Digite a URL da imagem:')
    if (url) {
      aplicarEstilo('insertImage', url)
    }
  }, [aplicarEstilo])

  const mudarCor = useCallback((cor) => {
    setCorAtual(cor)
    aplicarEstilo('foreColor', cor)
  }, [aplicarEstilo])

  const mudarTamanhoFonte = useCallback((tamanho) => {
    setTamanhoFonte(tamanho)
    aplicarEstilo('fontSize', tamanho)
  }, [aplicarEstilo])

  const mudarTipoFonte = useCallback((fonte) => {
    setTipoFonte(fonte)
    aplicarEstilo('fontName', fonte)
  }, [aplicarEstilo])

  const resetarEstilo = useCallback(() => {
    aplicarEstilo('removeFormat')
    aplicarEstilo('fontName', 'Arial')
    aplicarEstilo('fontSize', '3') // Tamanho padrão
    aplicarEstilo('foreColor', '#000000')
  }, [aplicarEstilo])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        // Aguarda o próximo ciclo para garantir que a nova linha foi criada
        setTimeout(() => {
          resetarEstilo()
        }, 0)
      }
    }

    const editor = editorRef.current
    editor.addEventListener('keydown', handleKeyDown)

    return () => {
      editor.removeEventListener('keydown', handleKeyDown)
    }
  }, [resetarEstilo])

  useEffect(() => {
    const handlePaste = (e) => {
      e.preventDefault()
      const text = e.clipboardData.getData('text/plain')
      document.execCommand('insertText', false, text)
    }

    const editor = editorRef.current
    editor.addEventListener('paste', handlePaste)

    return () => {
      editor.removeEventListener('paste', handlePaste)
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <Button variant="outline" size="icon" onClick={() => aplicarEstilo('bold')} aria-label="Negrito">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => aplicarEstilo('italic')} aria-label="Itálico">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => aplicarEstilo('underline')} aria-label="Sublinhado">
          <Underline className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => aplicarEstilo('insertUnorderedList')} aria-label="Lista Não Ordenada">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => aplicarEstilo('insertOrderedList')} aria-label="Lista Ordenada">
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => aplicarEstilo('justifyFull')} aria-label="Justificar">
          <AlignJustify className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => aplicarEstilo('justifyLeft')} aria-label="Alinhar à Esquerda">
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => aplicarEstilo('justifyCenter')} aria-label="Centralizar">
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => aplicarEstilo('justifyRight')} aria-label="Alinhar à Direita">
          <AlignRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={inserirLink} aria-label="Inserir Link">
          <Link className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={inserirImagem} aria-label="Inserir Imagem">
          <Image className="h-4 w-4" />
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Mudar Cor">
              <Palette className="h-4 w-4" style={{color: corAtual}} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="flex flex-wrap gap-2">
              {['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'].map((cor) => (
                <Button
                  key={cor}
                  variant="outline"
                  size="icon"
                  className="w-8 h-8"
                  style={{backgroundColor: cor}}
                  onClick={() => mudarCor(cor)}
                  aria-label={`Cor ${cor}`}
                />
              ))}
              <Input
                type="color"
                value={corAtual}
                onChange={(e) => mudarCor(e.target.value)}
                className="w-8 h-8 p-1"
                aria-label="Escolher cor personalizada"
              />
            </div>
          </PopoverContent>
        </Popover>
        <Select value={tamanhoFonte} onValueChange={mudarTamanhoFonte}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Tamanho" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">8px</SelectItem>
            <SelectItem value="2">10px</SelectItem>
            <SelectItem value="3">12px</SelectItem>
            <SelectItem value="4">14px</SelectItem>
            <SelectItem value="5">18px</SelectItem>
            <SelectItem value="6">24px</SelectItem>
            <SelectItem value="7">36px</SelectItem>
          </SelectContent>
        </Select>
        <Select value={tipoFonte} onValueChange={mudarTipoFonte}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Tipo de Fonte" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Arial">Arial</SelectItem>
            <SelectItem value="Helvetica">Helvetica</SelectItem>
            <SelectItem value="Times New Roman">Times New Roman</SelectItem>
            <SelectItem value="Courier New">Courier New</SelectItem>
            <SelectItem value="Verdana">Verdana</SelectItem>
            <SelectItem value="Georgia">Georgia</SelectItem>
            <SelectItem value="Palatino">Palatino</SelectItem>
            <SelectItem value="Garamond">Garamond</SelectItem>
            <SelectItem value="Bookman">Bookman</SelectItem>
            <SelectItem value="Comic Sans MS">Comic Sans MS</SelectItem>
            <SelectItem value="Trebuchet MS">Trebuchet MS</SelectItem>
            <SelectItem value="Arial Black">Arial Black</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div 
        ref={editorRef}
        contentEditable
        className="border rounded-md p-4 min-h-[300px] bg-background focus:outline-none"
        style={{fontFamily: tipoFonte}}
        aria-label="Área de edição de texto"
        role="textbox"
      />
    </div>
  )
}