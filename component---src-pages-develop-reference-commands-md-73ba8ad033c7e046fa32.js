(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[99492],{54979:function(e,a,n){"use strict";n.r(a),n.d(a,{_frontmatter:function(){return l},default:function(){return c}});var t=n(22122),m=n(19756),o=(n(15007),n(64983)),d=n(99536),l={},r={_frontmatter:l},s=d.Z;function c(e){var a=e.components,n=(0,m.Z)(e,["components"]);return(0,o.mdx)(s,(0,t.Z)({},r,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"commands"},"commands"),(0,o.mdx)("p",null,"You can make structural changes to the scenegraph, and perform other complex operations, by programmatically invoking the same\ncommands as XD users have access to in the UI. Because structural changes have many nuanced rules and behaviors in XD, these calls\nfunction more like automating the UI than like low-level APIs."),(0,o.mdx)("p",null,"For example, these methods do not take arguments. Instead, set the ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/selection/"},"selection")," to the objects you want the command to target, then\ninvoke the command. Commands may also change the selection when run - for example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"group()")," selects the newly created Group node."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'let commands = require("commands");\nselection.items = [shape1, shape2, maskShape];\ncommands.createMaskGroup();\nconsole.log(selection.items); // [Group]\n')),(0,o.mdx)("h3",{id:"commandsgroup"},"commands.group()"),(0,o.mdx)("p",null,"Wraps the selected objects in a ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/scenegraph/#Group"},"Group"),", leaving the Group selected afterward. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object >\nGroup")," in the UI."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"let shape1 = new Rectangle();\n// ...configure Rectangle size & appearance...\nlet label = new Text();\n// ...configure Text content & appearance...\n\n// Add both nodes to the current edit context first\nselection.insertionParent.addChild(shape1);\nselection.insertionParent.addChild(label);\n\n// Select both shapes, then run the group() command\nselection.items = [shape1, label];\ncommands.group();\nlet group = selection.items[0]; // the new Group node is what's selected afterward\n")),(0,o.mdx)("h3",{id:"commandsungroup"},"commands.ungroup()"),(0,o.mdx)("p",null,"Ungroups any of the selected objects that are ungroupable containers (Group, SymbolInstance, RepeatGrid, etc.). Equivalent to\n",(0,o.mdx)("em",{parentName:"p"},"Object > Ungroup"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandscreatemaskgroup"},"commands.createMaskGroup()"),(0,o.mdx)("p",null,"Creates a masked ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/scenegraph/#Group"},"Group")," from the selected objects, using the object that is highest in the z order as\nthe mask shape. The mask shape must be a leaf node or ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/scenegraph/#BooleanGroup"},"Boolean Group"),". Equivalent to\n",(0,o.mdx)("em",{parentName:"p"},"Object > Mask With Shape"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"let shape1 = new Rectangle(),\n  shape2 = new Ellipse();\n// ...configure shapes' size & appearance...\nlet maskShape = new Ellipse();\n// ...configure mask shape's size...\n\n// Create a Masked Group: add all nodes to the current edit context, select them, then run the createMaskGroup() command\nselection.insertionParent.addChild(shape1);\nselection.insertionParent.addChild(shape2);\nselection.insertionParent.addChild(maskShape); // added last: topmost in z order\nselection.items = [shape1, shape2, maskShape]; // order of selection array does not matter\ncommands.createMaskGroup();\nlet maskedGroup = selection.items[0];\n")),(0,o.mdx)("h3",{id:"commandsconverttopath"},"commands.convertToPath()"),(0,o.mdx)("p",null,"Converts each selected object to a ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/scenegraph/#Path"},"Path")," with the exact same visual appearance. Only applies to leaf\nnodes and ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/scenegraph/#BooleanGroup"},"Boolean Groups"),". Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Path > Convert to Path"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsduplicate"},"commands.duplicate()"),(0,o.mdx)("p",null,"Duplicates all selected objects, leaving the duplicates selected afterward."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"If the objects are artboards, the duplicates are positioned to not overlap any more artboards, and are placed at the top\nof the artboard z order."),(0,o.mdx)("li",{parentName:"ul"},"If normal objects, each duplicate is in the exact same position as the original, and just above it in the z order\n(duplicates of a multiple selection will not be contiguous in the z order if the originals were not).")),(0,o.mdx)("p",null,"Interactions triggered from the selected objects are only duplicated if the user is currently in the Prototype workspace.\nEquivalent to ",(0,o.mdx)("em",{parentName:"p"},"Edit > Duplicate"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsbringtofront"},"commands.bringToFront()"),(0,o.mdx)("p",null,"Brings selected objects to the front of the z order. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Arrange > Bring to Front"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsbringforward"},"commands.bringForward()"),(0,o.mdx)("p",null,"Brings each selected object one step closer to the front of the z order. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Arrange > Bring Forward"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandssendtoback"},"commands.sendToBack()"),(0,o.mdx)("p",null,"Sends selected objects to the back of the z order. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Arrange > Send to Back"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandssendbackward"},"commands.sendBackward()"),(0,o.mdx)("p",null,"Sends each selected object one step closer to the back of the z order. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Arrange > Send Backward"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsalignleft"},"commands.alignLeft()"),(0,o.mdx)("p",null,"Aligns all selected objects flush left. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Align > Left"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsalignright"},"commands.alignRight()"),(0,o.mdx)("p",null,"Aligns all selected objects flush right. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Align > Right"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsalignhorizontalcenter"},"commands.alignHorizontalCenter()"),(0,o.mdx)("p",null,"Aligns all selected objects along their horizontal centerlines. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Align > Center (Horizontally)"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsaligntop"},"commands.alignTop()"),(0,o.mdx)("p",null,"Aligns all selected objects flush top. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Align > Top"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsalignbottom"},"commands.alignBottom()"),(0,o.mdx)("p",null,"Aligns all selected objects flush bottom. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Align > Bottom"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsalignverticalcenter"},"commands.alignVerticalCenter()"),(0,o.mdx)("p",null,"Aligns all selected objects along their vertical centerlines. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Align > Center (Vertically)"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsdistributehorizontal"},"commands.distributeHorizontal()"),(0,o.mdx)("p",null,"Distributes all selected objects evenly along the X axis. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Distribute > Horizontally"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsdistributevertical"},"commands.distributeVertical()"),(0,o.mdx)("p",null,"Distributes all selected objects evenly along the Y axis. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Distribute > Vertically"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsaligntopixelgrid"},"commands.alignToPixelGrid()"),(0,o.mdx)("p",null,"Shifts all selected objects and their content so they align crisply with the pixel grid. Equivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Align to\nPixel Grid"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsmakebackground"},"commands.makeBackground()"),(0,o.mdx)("p",null,"Makes a stack background\nEquivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Make Background"),", which is available when selecting a single SceneNode that simultaneously meets the following conditions:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"is a stack cell"),(0,o.mdx)("li",{parentName:"ul"},"is a valid background candidate"),(0,o.mdx)("li",{parentName:"ul"},"belongs to a Stack that has no background"),(0,o.mdx)("li",{parentName:"ul"},"the Stack contains at least two stack cells")),(0,o.mdx)("p",null,"For the example below, see ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/scenegraph/#SceneNodeLayout"},"layout")," for examples of creating Stack without background."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example"),"  "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'const stack = ...;\n// suppose this node is a Stack containing at least two stack cells\nif (stack.layout.type === scenegraph.SceneNode.LAYOUT_STACK && stack.contentChildren.length > 1) {\n    // assume the first stack cell is a valid background candidate\n    const futureBackground = stack.contentChildren.at(0);\n\n   // suppose the Stack has no background\n   if (!stack.layout.padding.background) {\n        console.log(stack.layout.padding.background); // prints `null`\n        selection.items = [futureBackground];\n        commands.makeBackground();\n        console.log(stack.layout.padding.background.name); // prints the name of the "featureBackground" node\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))),(0,o.mdx)("h3",{id:"commandsreplacebackground"},"commands.replaceBackground()"),(0,o.mdx)("p",null,"Replaces a stack background\nEquivalent to ",(0,o.mdx)("em",{parentName:"p"},"Object > Replace Background"),", which is available when selecting a single SceneNode that simultaneously meets the following conditions:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"is a stack cell"),(0,o.mdx)("li",{parentName:"ul"},"is a valid background candidate"),(0,o.mdx)("li",{parentName:"ul"},"belongs to a Stack that has a background, which is different from the selected stack cell"),(0,o.mdx)("li",{parentName:"ul"},"the Stack contains at least two stack cells")),(0,o.mdx)("p",null,"For the example below, see ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/scenegraph/#SceneNode-layout"},"layout")," for examples of creating Stack without background."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example"),"  "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'const stack = ...;\n// suppose this node is a Stack containing at least two stack cells\nif (stack.layout.type === scenegraph.SceneNode.LAYOUT_STACK && stack.contentChildren.length > 1) {\n    // assume the first stack cell is a valid background candidate\n    const futureBackground = stack.contentChildren.at(0);\n\n    // suppose the Stack contains a background, which is different from the selected one\n    if (stack.layout.padding.background && featureBackground.guid !== stack.layout.padding.background.guid) {\n        console.log(stack.layout.padding.background.name); // prints the name of the actual background node\n        selection.items = [futureBackground];\n        commands.replaceBackground();\n        console.log(stack.layout.padding.background.name); // prints the name of the "featureBackground" node\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.mdx)("a",{parentName:"p",href:"#module_commands"},(0,o.mdx)("inlineCode",{parentName:"a"},"commands"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-commands-md-73ba8ad033c7e046fa32.js.map