import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SimpleTreeView } from '@mui/x-tree-view';
import { AccountIcon, BriefcaseIcon, EslintIcon, FolderOpenedIcon, GitIcon, LightbulbIcon, MailIcon, NextJsIcon, SymbolNamespaceIcon, ToolsIcon, TsIcon, YarnIcon } from '@/app/components/GlobalComponents';
import { ExplorerContainer, RootItem, TItem } from '@/app/components/ExplorerPanel/PanelComponents';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TabContext from '@/app/contexts/TabContext';

const ExplorerPanel = () => {

  const router = useRouter();

  const { tabs, setTabs, setSelectedTab } = useContext(TabContext);

  const [expandedItems, setExpandedItems] = useState(['1', '4', '5', '12', '18']);

  const handleToggle = (event: any, itemId: string) => {
    setExpandedItems((prevExpanded) =>
      prevExpanded.includes(itemId)
        ? prevExpanded.filter(id => id !== itemId)
        : [...prevExpanded, itemId]
    );
  };

  const onClickItem = (fileName: string) => {
    setTabs((prevTabs: string[]) => {
      if (!prevTabs.includes(fileName)) {
        setSelectedTab(prevTabs.length);
        return [...prevTabs, fileName];
      }
      setSelectedTab(prevTabs.indexOf(fileName));
      return prevTabs;
    })
  };

  const filterOutExpandedItems = (itemId: string) => {
    setExpandedItems((prevExpanded) => prevExpanded.filter(id => id !== itemId));
  }

  return (
    <ExplorerContainer>
      <SimpleTreeView
       expandedItems={expandedItems}
       onItemClick={handleToggle}
      >
        <RootItem itemId="1" label="PORTFOLIO">
          <TItem itemId="2" label=".next" slots={{ icon: ChevronRightIcon }} disabled />
          <TItem itemId="3" label="node_modules" slots={{ icon: ChevronRightIcon }} disabled />
          <TItem itemId="4" label="public" >
            <TItem itemId="12" label="SangheonLee.ts" slots={{ icon: TsIcon }} onClick={() => {
              filterOutExpandedItems('18')
              onClickItem('SangheonLee.ts')
            }}>
              <TItem itemId="13" label="About Me" slots={{ icon: AccountIcon }} onClick={() => router.push('/#about-me')} />
              <TItem itemId="14" label="Work Experience" slots={{ icon: BriefcaseIcon }} onClick={() => router.push('/#work-experience')} />
              <TItem itemId="15" label="Skills" slots={{ icon: ToolsIcon }} onClick={() => router.push('/#skills')} />
              <TItem itemId="16" label="Projects" slots={{ icon: LightbulbIcon }} onClick={() => router.push('/#projects')} />
              <TItem itemId="17" label="Contact Me" slots={{ icon: MailIcon }} onClick={() => router.push('/#contact-me')} />
            </TItem>
          </TItem>
          <TItem itemId="5" label="src">
            <TItem itemId="18" label="projects" slots={{ icon: FolderOpenedIcon }}>
              <TItem itemId="19" label="Pixie.ts" onClick={() => {
                filterOutExpandedItems('12')
                onClickItem('Pixie.ts')
              }} />
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
