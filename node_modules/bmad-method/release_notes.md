## 🚀 What's New in v4.44.1

### ✨ New Features
- feat: implement fork-friendly CI/CD with opt-in mechanism (#476)
- feat(installer): add Codex CLI + Codex Web modes, generate AGENTS.md, inject npm scripts, and docs (#529)
- feat: add PR validation workflow and contribution checks
- feat: Add Auggie CLI (Augment Code) Integration (#520)
- feat: enhance file exclusion capabilities with .bmad-flattenignore support (#531)
- feat: add iflow cli support to bmad installer.  (#510)
- feat(opencode): add JSON-only integration and compact AGENTS.md generator (#570)

### 🐛 Bug Fixes
- fix: update installer version display to show 4.39.0
- fix: prettier fixes
- fix: previous merge set wrong default install location
- fix: documentation and trademark updates
- fix: remove incorrect else branch causing flatten command regression (#452)
- fix: correct dependency path format in bmad-master agent (#495)
- fix: Codex options missing from the IDE selection menu (#535)
- Fixed: "glob" is not defined (#504)
- fix: Template file extension in validation next story steps (#523)
- fix: update .gitignore to correct cursor file entry (#485)
- fix: update workflow file extensions from .md to .yaml in bmad-master.md (#562)
- fix: Changed title to coding standards section of brownfield architecture template (#564)
- fix: BMAD Brownfield Document Naming Inconsistency Bug (#627)

### 📦 Other Changes
- patch: move script to tools folder
- typo in README.md (#515)
- Update dev.md (#491)
- test: trigger PR validation (#533)
- docs: remove misplaced Codex section from README
- Expansion pack doc correction
- added gemini cli custom commands! (#549)
- Update ide-setup.js - add missing glob require (#514)
- Godot Game Dev expansion pack for BMAD (#532)
- documentation updates
- remove errant command from readme
- version up

### 🔧 Maintenance
- chore: bump to 4.39.1 to fix installer version display
- chore: update project dependencies and development tooling (#508)
- chore: bump version to 4.42.0 for release
- chore: sync version to 4.42.1 after release


## 📦 Installation

```bash
npx bmad-method install
```

**Full Changelog**: https://github.com/bmadcode/BMAD-METHOD/compare/v4.39.0...v4.44.1
