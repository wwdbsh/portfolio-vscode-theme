import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './panel.module.css'
import { SimpleTreeView } from '@mui/x-tree-view';
import { ExplorerContainer, InactiveTItem, RootItem, TItem } from './PanelComponents';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AccountIcon, BriefcaseIcon, EslintIcon, FolderOpenedIcon, GitIcon, LightbulbIcon, MailIcon, NextJsIcon, SymbolNamespaceIcon, ToolsIcon, TsIcon, YarnIcon } from '@/app/components/GlobalComponents';

const ExplorerPanel = () => {
  const [expandedItems, setExpandedItems] = useState(['1', '4', '5', '12', '18']);

  const handleToggle = (event: any, itemId: string) => {
    if (itemId === '12' || itemId === '18') {
      return;
    }
    
    setExpandedItems((prevExpanded) =>
      prevExpanded.includes(itemId)
        ? prevExpanded.filter(id => id !== itemId)
        : [...prevExpanded, itemId]
    );
  };

  return (
    <ExplorerContainer>
      <SimpleTreeView
       expandedItems={expandedItems}
       onItemClick={handleToggle}
      >
        <RootItem itemId="1" label="PORTFOLIO">
          <InactiveTItem itemId="2" label=".next" slots={{ icon: ChevronRightIcon }}/>
          <InactiveTItem itemId="3" label="node_modules" slots={{ icon: ChevronRightIcon }}/>
          <TItem itemId="4" label="public" >
            <TItem itemId="12" label="SangheonLee.ts" slots={{ icon: TsIcon }} >
              <TItem itemId="13" label="About Me" slots={{ icon: AccountIcon }} />
              <TItem itemId="14" label="Work Experience" slots={{ icon: BriefcaseIcon }} />
              <TItem itemId="15" label="Skills" slots={{ icon: ToolsIcon }} />
              <TItem itemId="16" label="Projects" slots={{ icon: LightbulbIcon }} />
              <TItem itemId="17" label="Contact Me" slots={{ icon: MailIcon }} />
            </TItem>
          </TItem>
          <TItem itemId="5" label="src">
            <TItem itemId="18" label="projects" slots={{ icon: FolderOpenedIcon }}>

            </TItem>
          </TItem>
          <TItem itemId="6" label=".eslintrc.json" slots={{ icon: EslintIcon }} />
          <TItem itemId="7" label=".gitignore" slots={{ icon: GitIcon }} />
          <TItem itemId="8" label="next.config.js" slots={{ icon: NextJsIcon }} />
          <TItem itemId="9" label="package.json" slots={{ icon: SymbolNamespaceIcon }} />
          <TItem itemId="10" label="tsconfig.json" slots={{ icon: TsIcon }} />
          <TItem itemId="11" label="yarn.lock" slots={{ icon: YarnIcon }} />
        </RootItem>
      </SimpleTreeView>
    </ExplorerContainer>
  );
};

export default ExplorerPanel;
