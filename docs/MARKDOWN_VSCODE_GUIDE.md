# Markdown in VS Code - Vollständige Anleitung

## 1. Markdown Preview

### Eingebaute Vorschau
1. Öffne eine `.md` Datei in VS Code
2. Drücke `Cmd + Shift + V` (Mac) oder `Ctrl + Shift + V` (Windows/Linux)
   - ODER: Klicke auf das Preview-Icon (Split-Screen) oben rechts im Editor
   - ODER: Cmd/Ctrl + Shift + P und tippe "Markdown: Open Preview"

### Side-by-Side Preview
1. Drücke `Cmd + K V` (Mac) oder `Ctrl + K V` (Windows/Linux)
   - Dies öffnet die Vorschau neben dem Editor

## 2. Empfohlene Extensions

### 1. Markdown All in One
- **Installation:**
  1. Öffne Extensions in VS Code (Cmd/Ctrl + Shift + X)
  2. Suche nach "Markdown All in One"
  3. Klicke auf Install

- **Features:**
  - Tastenkombinationen für Formatierung
  - Automatische Listenformatierung
  - Mathematische Ausdrücke (KaTeX)
  - Inhaltsverzeichnis-Generator
  - Export zu HTML und PDF

### 2. Markdown Preview Enhanced
- **Installation:**
  1. Suche nach "Markdown Preview Enhanced"
  2. Installiere die Extension

- **Features:**
  - Erweiterte Vorschau-Funktionen
  - Code-Chunks
  - Präsentationsmodus
  - PDF/HTML/PNG/JPEG Export
  - Diagramme und Graphen

### 3. markdownlint
- Hilft bei der Einhaltung von Markdown-Stilrichtlinien
- Zeigt Warnungen für inkonsistente Formatierung

## 3. Nützliche Tastenkombinationen
(Mit Markdown All in One)

| Aktion | Mac | Windows/Linux |
|--------|-----|---------------|
| Fett | `Cmd + B` | `Ctrl + B` |
| Kursiv | `Cmd + I` | `Ctrl + I` |
| Aufzählungsliste | `Opt + C` | `Alt + C` |
| Nummerierte Liste | `Opt + O` | `Alt + O` |
| Checkbox | `Opt + X` | `Alt + X` |
| Inhaltsverzeichnis | `Cmd + Shift + P` dann "Create Table of Contents" | `Ctrl + Shift + P` dann "Create Table of Contents" |

## 4. Live Server für Markdown

Wenn du Markdown-Dateien über einen Server anzeigen möchtest:

1. Installiere Live Server Extension:
   - Suche nach "Live Server" in den Extensions
   - Installiere die Extension

2. Starte den Server:
   - Rechtsklick auf die .md Datei
   - Wähle "Open with Live Server"

## 5. Export-Optionen

### Als PDF exportieren
Mit Markdown Preview Enhanced:
1. Öffne die Vorschau
2. Rechtsklick in der Vorschau
3. Wähle "Chrome (Puppeteer) > PDF"

### Als HTML exportieren
1. Mit Markdown All in One:
   - Cmd/Ctrl + Shift + P
   - "Markdown: Print current document to HTML"

2. Mit Markdown Preview Enhanced:
   - Rechtsklick in der Vorschau
   - "HTML > HTML (offline)"

## 6. Best Practices

### Formatierung
- Verwende konsistente Einrückungen
- Lasse eine Leerzeile zwischen Überschriften und Text
- Nutze Aufzählungszeichen einheitlich (entweder `-` oder `*`)

### Struktur
- Beginne Dokumente mit einer H1-Überschrift
- Verwende hierarchische Überschriften (H1 > H2 > H3)
- Füge ein Inhaltsverzeichnis für längere Dokumente hinzu

### Vorschau
- Nutze die Side-by-Side-Vorschau beim Editieren
- Aktiviere Auto-Save (File > Auto Save)
- Überprüfe Links mit der Vorschau

## 7. Häufige Probleme & Lösungen

### Vorschau aktualisiert sich nicht
1. Schließe die Vorschau
2. Cmd/Ctrl + Shift + P
3. "Developer: Reload Window"

### Bilder werden nicht angezeigt
- Verwende relative Pfade
- Überprüfe Groß-/Kleinschreibung
- Stelle sicher, dass Bilder im richtigen Verzeichnis sind

### Formatierung funktioniert nicht
1. Überprüfe Leerzeichen nach Markdown-Symbolen
2. Stelle sicher, dass keine versteckten Zeichen vorhanden sind
3. Nutze die markdownlint Extension für Fehlersuche

## 8. Nützliche Ressourcen

- [Markdown Guide](https://www.markdownguide.org)
- [VS Code Markdown Docs](https://code.visualstudio.com/docs/languages/markdown)
- [GitHub Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
